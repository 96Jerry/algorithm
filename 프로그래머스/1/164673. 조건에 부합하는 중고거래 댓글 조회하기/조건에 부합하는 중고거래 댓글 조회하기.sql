-- 코드를 입력하세요
# SELECT * from used_goods_board;
# SELECT * from used_goods_reply;

select title TITLE, ugb.board_id BOARD_ID, reply_id REPLY_ID, ugr.writer_id WRITER_ID, ugr.contents CONTENTS, date_format(ugr.created_date, '%Y-%m-%d') CREATED_DATE from used_goods_board ugb inner join used_goods_reply ugr on ugb.board_id = ugr.board_id
where ugb.created_date >= '2022-10-01' and ugb.created_date <= '2022-10-31'
order by ugr.created_date asc, ugb.title asc
;
