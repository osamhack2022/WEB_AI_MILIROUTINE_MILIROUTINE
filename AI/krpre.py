import torch
import re
import emoji  # 이모티콘 제거
from konlpy.tag import Komoran

'''
1. 기초: 특수문자 및 이모티콘 제거
2. 형태소 분석 후 명사 분리(Komoran이 자소 분리나 오탈자에 대해서도 좋은 성능을 보임)
3. 불용어 제거(https://www.ranks.nl/stopwords/korean)

* 맞춤법 및 띄어쓰기 전처리를 하지 않고 형태소 분석을 바로 한 이유

	King-pin word는 명사이므로 명사를 분리해내는 것이 중요한데
	맞춤법 교정(hanspell)이나 띄어쓰기(pykospacing)를 하면

	ex) 나히토미양뽑혔을때너무좋아했어요
	
	hanspell   : 나의 토미 양 뽑혔을 때 너무 좋아했어요
	pykospacing: 나히토 미양 뽑혔을 때 너무 좋아했어요

	명사(히토미)를 제대로 인식하지 못하는 경우가 꽤 발생함

	반대로 위 전처리를 거치지 않고 형태소 분석을 바로 사용하면

	komoran.morphs: ['나', '히토미', '양', '뽑히', '었', '을', '때', '너무', '좋아하', '았', '어요']
	komoran.nouns : ['나', '히토미', '양', '때']
	불용어 제거 후  : ['히토미', '양']
'''

def Clean_text(text):  # 기초
	text = re.sub('[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '', text)
	return re.sub(emoji.get_emoji_regexp(), r"", text)  # 이모티콘 제거

class komoran(Komoran):
	def nouns(self, phrase, comp):  # comp=1: 분리된 명사를 합쳐서 넣기 ex) ['귀', '요미'] -> ['귀', '요미', '귀요미']
		tagged = self.pos(phrase)
		if comp:
			ret = []
			tmp = []
			for s, t in tagged:
				if t.startswith('NN'):
					tmp += [s]
					for i in range(len(tmp)):
						ret += [''.join(tmp[i:])]
				else:
					tmp.clear()
			return ret
		else:
			return [s for s, t in tagged if t.startswith('NN')]

class Stopword():  # 불용어 제거
	def __init__(self):
		with open('./AI/stopwords.txt', encoding='utf8') as f:
			self.stopword = [w[:-1] for w in f]
	def Remove(self, text):
		return [w for w in text if w not in self.stopword]