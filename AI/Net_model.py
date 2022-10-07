import torch
import torch.nn as nn


class Net_model(nn.Module):
    def __init__(self): # *hint* dropout probability를 위한 파라미터 추가
        super().__init__()
        self.mlp = nn.Sequential(
            nn.Linear(330, 220), # 첫 번째 층 정의: 등록한 루틴의 이름 평균 벡터 300 + 주기 벡터 30
            nn.init.xavier_normal_(torch.empty(1,1)), #등을 통해 weight initialization 적용
            nn.ReLU(), # activation function
            # *hint* nn.Dropout(drop_prob) 등을 통해 dropout 적용
            nn.Linear(220, 110),
            nn.ReLU(),
            nn.Linear(110, 30), # 출력 층 정의: 벡터 등록한 루틴 + 새로 등록할 루틴의 1 or 0 원핫벡터
            nn.Softmax(dim=-1))

    def forward(self, x):
        x = self.mlp(x)
        return x


class Config(): # 하이퍼파라미터들을 위한 configuration
    def __init__(self):
        self.batch_size = 200
        self.lr_adam = 0.001
        self.lr_adadelta = 0.1
        self.epoch = 30
        self.weight_decay = 1e-03
