from collections import defaultdict

class TrieNode:
    __slots__ = ('children', 'count')  # 슬랏을 지정하면 메모리/속도 개선에 조금 더 유리
    def __init__(self):
        self.children = {}
        self.count = 0  # 이 노드를 거쳐가는(또는 이 노드에 해당하는) 단어의 수

def trie_insert(root: TrieNode, word: str) -> None:
    """word를 root로부터 순서대로 삽입"""
    node = root
    node.count += 1  # 트라이 전체를 거쳐가는 단어 수 1 증가
    for ch in word:
        if ch not in node.children:
            node.children[ch] = TrieNode()
        node = node.children[ch]
        node.count += 1

def trie_search(root: TrieNode, prefix: str) -> int:
    """prefix로 시작하는 단어의 개수를 반환"""
    node = root
    for ch in prefix:
        if ch not in node.children:
            return 0
        node = node.children[ch]
    return node.count

def solution(words, queries):
    # 1) 단어들을 길이별로 분류
    grouped_words = defaultdict(list)
    for w in words:
        grouped_words[len(w)].append(w)
    
    # 2) 길이별로 forward trie, backward trie 구성
    tries = {}     # 예: tries[L] = TrieNode()  (앞방향)
    rev_tries = {} # 예: rev_tries[L] = TrieNode() (뒤집어서 삽입)
    
    for length, wlist in grouped_words.items():
        # 루트 트라이 생성
        root_f = TrieNode()  # forward
        root_b = TrieNode()  # backward
        for w in wlist:
            trie_insert(root_f, w)            # 정방향 삽입
            trie_insert(root_b, w[::-1])      # 역방향(뒤집어서) 삽입
        tries[length] = root_f
        rev_tries[length] = root_b
    
    # 3) 쿼리 처리
    answer = []
    for q in queries:
        length = len(q)
        if length not in tries:
            # 해당 길이에 해당하는 단어가 하나도 없음
            answer.append(0)
            continue
        
        # 전부 '?'라면 grouped_words[length]의 전체 개수
        if all(ch == '?' for ch in q):
            answer.append(len(grouped_words[length]))
            continue
        
        # 처음 문자가 '?'가 아니라면 -> 접두사 검색
        #  (즉 뒤가 ???? 형태일 가능성이 높음)
        if q[0] != '?':
            # 접두사 구하기: 처음부터 물음표가 나오기 전까지
            prefix = []
            for ch in q:
                if ch == '?':
                    break
                prefix.append(ch)
            prefix_str = "".join(prefix)  # 접두사
            
            cnt = trie_search(tries[length], prefix_str)
            answer.append(cnt)
        
        else:
            # 처음 문자가 '?' -> 접미사 검색
            #  (즉 앞이 ???? 형태이고 뒤에 몇 글자 알파벳이 있을 수 있음)
            suffix = []
            for ch in reversed(q):
                if ch == '?':
                    break
                suffix.append(ch)
            suffix_str = "".join(suffix)  # 뒤에서부터 얻은 접미사(뒤집힌 상태)
            # 실제 backward trie에 검색할 때는 뒤집힌 suffix_str 그대로 사용
            cnt = trie_search(rev_tries[length], suffix_str)
            answer.append(cnt)
    
    return answer