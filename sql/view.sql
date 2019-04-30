drop view if exists progressView;

drop view if exists assignmentView;

create view progressView as
select t1.*, t2.name checker
from (
select
t1.id,
t1.title,
t1.priority,
t1.deadline,
t1.content,
t5.name createrName,
t1.createTime,
t3.title type,
t2.title status,
t1.finishedTime,
t1.reason,
t1.difficulty,
t1.isFinished,
t1.checkTime,
t1.foreward,
t4.title project,
t1.plan,
t1.checkerId,
t1.extra
from
progress t1
join status t2
join progress_type t3
join project t4
join developer t5
on
t1.createrId = t5.id
and t1.typeId = t3.id
and t1.statusId = t2.id
and t1.projectId = t4.id
) t1
left join  developer t2
on t2.id = t1.checkerId
order by t1.deadline, t1.priority;


create view assignmentView as
select
t2.name,
t3.*
from
assignment t1
join developer t2
join progressView t3
on
t1.progressId = t3.id
and t1.developerId = t2.id
order by t3.deadline, t3.priority
