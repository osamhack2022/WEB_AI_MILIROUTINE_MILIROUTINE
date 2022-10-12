import torch
import krpre  # 한글 전처리
from konlpy.tag import Komoran  # 형태소 분석
import gensim
import consql as cs
from cfg import open


model = gensim.models.Word2Vec.load('./AI/ko.bin')
model.min_count=1  # 단어 하나만 있어도 훈련
komoran=krpre.komoran()

stopword=krpre.Stopword()

n=0
# with open('./AI/r5e_name.txt')as f:
routine=cs.ex('SELECT name FROM routine;')  # 서버에서 루틴 이름 가져오기
routine=[r[0] for r in routine]
for r in routine:
	r = krpre.Clean_text(r)
	# r = spacing(r)
	# r = spell_checker.check(r).checked
	r = komoran.nouns(r, 0)
	r = stopword.Remove(r)
	print(r)
	for w in r:
		if w in model.wv.vocab:
			print('true')
		else:
			print('false')
	n+=1
	if(n>=50):
		break
	# for line in f:

routine=[stopword.Remove(komoran.nouns(krpre.Clean_text(r),0))for r in routine]
print(routine)
# line = krpre.Clean_text(line)
# line = komoran.nouns(line, 0)
# line = stopword.Remove(line)
model.build_vocab(routine, update=True)
model.train(routine,total_examples=model.corpus_count,epochs=model.iter)
# n+=1
# if(n>=50):
# 	break

model.save('./AI/kosql.bin')
model=gensim.models.Word2Vec.load('./AI/kosql.bin')

for r in routine:
	r = krpre.Clean_text(r)
	# r = spacing(r)
	# r = spell_checker.check(r).checked
	r = komoran.nouns(r, 0)
	r = stopword.Remove(r)
	print(r)
	for w in r:
		if w in model.wv.vocab:
			print('true')
		else:
			print('false')
	n+=1
	if(n>=50):
		break

print(model.most_similar('백주'))
print(len(model.wv.get_vector('백주')))