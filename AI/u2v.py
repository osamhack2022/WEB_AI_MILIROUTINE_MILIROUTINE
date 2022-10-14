import torch
import gensim
import json
import consql as cs
from cfg import open

# def user

# model=gensim.models.Word2Vec.load('./AI/kosql.bin')

d2v=torch.load('./AI/d2v_tensor.pt')

routine=cs.ex('SELECT routine_id FROM user_routine WHERE user_no = 20;')
routine=[r[0] for r in routine]  # ((ㅁ,),(ㅎ,),....)

print(routine)

tensor=[]
# tensor=torch.tensor([d2v[r] for r in routine])
tensor=torch.stack([*(d2v[r] for r in routine)], 0)
print(tensor)
# print([d2v[r] for r in routine])
tensor=torch.mean(tensor,0)
print(tensor.size())
print(tensor)
# for r in routine:

#     tensor+=d2v[r]
# 	# temp=torch.tensor([d2v.wv.get_vector(w)for w in r])
# 	# temp=torch.mean(temp,0)
# 	# tensor.append(temp.tolist())
# tensor/=len(routine)

# print(tensor)
# torch.save(torch.FloatTensor(tensor),'./AI/d2v_tensor.pt')


# tt=torch.load('./AI/d2v_tensor.pt')
# print(tt.size())