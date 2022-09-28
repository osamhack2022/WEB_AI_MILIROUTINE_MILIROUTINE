import torch
import krpre
from konlpy.tag import Komoran  # 형태소 분석
from hanspell import spell_checker  # 네이버 맞춤법 검사
# from pykospacing import spacing  # 띄어쓰기
import gensim
from cfg import open
model = gensim.models.Word2Vec.load('ko.bin')
model.min_count=1  # 단어 하나만 있어도 훈련
komoran=krpre.komoran()

stopword=krpre.Stopword()

n=0
with open('r5e_name.txt')as f:
	for line in f:
		line = krpre.Clean_text(line)
		# line = spacing(line)
		# line = spell_checker.check(line).checked
		line = komoran.nouns(line, 0)
		line = stopword.Remove(line)
		print(line)
		for w in line:
			if w in model.wv.vocab:
				print('true')
			else:
				print('false')
		n+=1
		if(n>=50):
			break
with open('r5e_name.txt')as f:
	# for line in f:
	f=[stopword.Remove(komoran.nouns(krpre.Clean_text(line),0))for line in f]
	print(f)
	# line = krpre.Clean_text(line)
	# line = komoran.nouns(line, 0)
	# line = stopword.Remove(line)
	model.build_vocab(f, update=True)
	model.train(f,total_examples=model.corpus_count,epochs=model.iter)
	# n+=1
	# if(n>=50):
	# 	break
model.save('kotrain.bin')
model=gensim.models.Word2Vec.load('kotrain.bin')
with open('r5e_name.txt')as f:
	for line in f:
		line = krpre.Clean_text(line)
		# line = spacing(line)
		# line = spell_checker.check(line).checked
		line = komoran.nouns(line, 0)
		line = stopword.Remove(line)
		print(line)
		for w in line:
			if w in model.wv.vocab:
				print('true')
			else:
				print('false')
		n+=1
		if(n>=50):
			break
print(model.most_similar('친환경'))
print(len(model.wv.get_vector('친환경')))