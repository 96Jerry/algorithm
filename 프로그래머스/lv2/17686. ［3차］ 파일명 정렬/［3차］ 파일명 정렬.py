def solution(files):
    
    new_files = []
    for file in files:
        for i in range(len(file)):
            if file[i].isdigit():
                head = file[:i]
                back = file[i:]
                break
        for i in range(len(back)):
            if not back[i].isdigit():
                number = back[:i]
                tail = back[i:]
                break
        else:
            number=back
            tail=''
        new_files.append([head, number, tail])
    
    new_files.sort( key=lambda x:( x[0].lower(), int(x[1]) ) )
    
    answer = []
    for new_file in new_files:
        answer.append(''.join(new_file))
    return answer