import torch
import torch.nn as nn
import torch.optim as optim
import torchvision.utils as utils
import torchvision.datasets as dsets
import torchvision.transforms as transforms
import time
from torch.utils.data import DataLoader

def generate_batch(train_data, val_data): # batch_size 단위로 데이터를 리턴해주는 함수
    train_batch_loader = DataLoader(train_data, cfg.batch_size, shuffle=True)
    val_batch_loader = DataLoader(val_data, cfg.batch_size, shuffle=True)
    return train_batch_loader, val_batch_loader


if __name__ == '__main__':
    print('[MNIST_training]')
    # GPU 사용이 가능하면 사용하고, 불가능하면 CPU 활용
    print("GPU Available:", torch.cuda.is_available())
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    # configuration
    cfg = Config()

    # 데이터 로드
    train_data, val_data = data_load()

    # data 개수 확인
    print('The number of training data: ', len(train_data))
    print('The number of validation data: ', len(val_data))


    # 학습 모델 생성
    model = MNIST_model().to(device) # 모델을 지정한 device로 올려줌

    # 배치 생성
    train_batch_loader, val_batch_loader = generate_batch(train_data, val_data)

    # optimizer 및 criterion 정의
    optimizer = optim.Adam(model.parameters(), lr=cfg.lr_adam) # *hint* weight_decay 파라미터에 lamda 값 입력
    criterion = nn.CrossEntropyLoss()

    # training 시작
    start_time = time.time()
    highest_val_acc = 0
    val_acc_list = []
    print('========================================')
    print("Start training")
    for epoch in range(cfg.epoch):
        train_loss = 0
        train_batch_cnt = 0
        model.train() # training 모드
        for img, label in train_batch_loader:
            img = img.to(device)
            label = label.to(device)


            optimizer.zero_grad() # iteration 마다 gradient를 0으로 초기화
            pred = model.forward(img.view(-1, 28 * 28)) # 28*28 이미지를 784 features로 reshape 후 forward
            loss = criterion(pred, label) #cross entropy loss 계산
            loss.backward() # 가중치 w에 대해 loss를 미분
            optimizer.step() # 가중치들을 업데이트
            train_loss += loss.item()
            train_batch_cnt += 1
        ave_loss = train_loss / train_batch_cnt # 학습 데이터의 평균 loss
        training_time = (time.time() - start_time) / 60
        print('========================================')
        print("epoch:", epoch + 1)
        print("training_time: %.2f minutes" % training_time)

        # validation (for early stopping)
        correct_cnt = 0
        model.eval() # 평가 모드
        for img, label in val_batch_loader:
            _, top_pred = torch.topk(pred, k=1, dim=-1)
            top_pred = top_pred.squeeze(dim=1)
            correct_cnt += int(torch.sum(top_pred == label)) # 맞춘 개수 카운트

        val_acc = correct_cnt / len(val_data) * 100 # validation accuracy 계산
        val_acc_list.append(val_acc)
        if val_acc > highest_val_acc: # validation accuracy가 경신될 때
            save_path = './saved_model/setting_1/epoch_' + str(epoch + 1) + '.pth'
            torch.save({'epoch': epoch + 1,
                        'model_state_dict': model.state_dict()},
                       save_path) # best accuracy에 도달할 때만 모델을 저장함으로써 early stopping
    # 각 epoch에서의 accuracy를 시각화
    epoch_list = [i + 1 for i in range(cfg.epoch)]