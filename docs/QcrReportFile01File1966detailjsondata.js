console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java 90 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskAssignor"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#48"
 , "c1" : "StickyTaskAssignor"
 , "c2" : "StickyTaskAssignor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#52"
 , "c1" : "StickyTaskAssignor"
 , "c2" : "StickyTaskAssignor(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#57"
 , "c1" : "boolean"
 , "c2" : "assign(Map<UUID,ClientState>;Set<TaskId>;Set<TaskId>;AssignmentConfigs)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#74"
 , "c1" : "void"
 , "c2" : "assignStandby(int)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#92"
 , "c1" : "void"
 , "c2" : "assignActive()"
 , "c3" : "9"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00137"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#137"
 , "c1" : "void"
 , "c2" : "allocateTaskWithClientCandidates(TaskId;Set<UUID>;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00147"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#147"
 , "c1" : "void"
 , "c2" : "assignTaskToClient(Set<TaskId>;TaskId;ClientState)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00153"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#153"
 , "c1" : "Set<UUID>"
 , "c2" : "findClientsWithoutAssignedTask(TaskId)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00164"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#164"
 , "c1" : "ClientState"
 , "c2" : "findClient(TaskId;Set<UUID>)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00187"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#187"
 , "c1" : "boolean"
 , "c2" : "shouldBalanceLoad(ClientState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00191"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#191"
 , "c1" : "boolean"
 , "c2" : "hasClientsWithMoreAvailableCapacity(ClientState)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00200"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#200"
 , "c1" : "ClientState"
 , "c2" : "findClientsWithPreviousAssignedTask(TaskId;Set<UUID>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00208"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#208"
 , "c1" : "ClientState"
 , "c2" : "findLeastLoadedClientWithPreviousStandByTask(TaskId;Set<UUID>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00218"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#218"
 , "c1" : "ClientState"
 , "c2" : "leastLoaded(TaskId;Set<UUID>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00226"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#226"
 , "c1" : "ClientState"
 , "c2" : "findLeastLoaded(TaskId;Set<UUID>;boolean)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00249"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#249"
 , "c1" : "void"
 , "c2" : "mapPreviousTaskAssignment(Map<UUID,ClientState>)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00263"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#263"
 , "c1" : "int"
 , "c2" : "sumCapacity(Collection<ClientState>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File1966Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1966&numSeq=1"
 , "c2" : "1"
 , "c3" : "3"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.getKey@POLYN606786.return" , "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ko"
 , "secu2" : "Ok"
 , "secu3" : "Ko"
 , "secu4" : "Ko"
}}
]
,
"data09b" : [
{ "sequence" : { 
 "seq" : "1" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "3"
 , "sourcenoligne" : "[00100]"
 , "c3" : ["java.util.HashMap.getKey@POLYN606786.return" , "---java.util.HashMap.getKey@POLYN606786" , "org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN190334.taskId"]
 , "c4" : "//QC-JAVCWE099[00100] In org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN190334[00100] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00104]"
 , "c3" : ["org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN190334.taskId" , "---org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignTaskToClient@POLYN193437" , "org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignTaskToClient@POLYN193437.taskId"]
 , "c4" : ""
 , "c5" : "none"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00150]"
 , "c3" : ["org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignTaskToClient@POLYN193437.taskId" , "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" , "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e"]
 , "c4" : "//QC-JAVCWE099[00150] In org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignTaskToClient@POLYN193437[00150] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c3" : ""
 , "c4" : "Security risk level : CRITICAL"
}}
]
}}
]
, 
"data10" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "34"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.StickyTaskAssignor@POLYN188318 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method assign arguments Map&lt;UUID ,ClientState &gt;  clients|Set&lt;TaskId &gt;  allTaskIds|Set&lt;TaskId &gt;  statefulTaskIds|AssignmentConfigs  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00057] For method assign list of called methods Object monObjet|int allTaskIds_sizeN189022"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument allTaskIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assign@POLYN188562 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assign@POLYN188562 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assign@POLYN188562 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method assignStandby arguments int  numStandbyReplicas"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method assignStandby list of called methods Object monObjet|java.util.Set findClientsWithoutAssignedTaskN189844"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN189484 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN189484 the MagicNumber/String  'Unable to assign {} of {} standby tasks for task [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN189484 the MagicNumber/String  'There is not enough available capacity. You should ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN189484 the MagicNumber/String  'increase the number of threads and/or application instances ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN189484 the MagicNumber/String  'to maintain the requested number of standby replicas.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN189484 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00092] For method assignActive list of called methods Object monObjet|int sumCapacityN190410|int allTaskIds_sizeN190521|V previousStandbyTaskAssignment_getN191860"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN190334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN190334 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method allocateTaskWithClientCandidates arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin|boolean  active"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00137] For method allocateTaskWithClientCandidates list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState findClientN193033"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method assignTaskToClient arguments Set&lt;TaskId &gt;  assigned|TaskId  taskId|ClientState  client"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument assigned is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method findClientsWithoutAssignedTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method findClient arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00164] For method findClient list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState findClientsWithPreviousAssignedTaskN194803|org.apache.kafka.streams.processor.internals.assignment.ClientState findLeastLoadedClientWithPreviousStandByTaskN195158"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument clientsWithin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method shouldBalanceLoad arguments ClientState  client"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method hasClientsWithMoreAvailableCapacity arguments ClientState  client"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.hasClientsWithMoreAvailableCapacity@POLYN195712 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.hasClientsWithMoreAvailableCapacity@POLYN195712 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method findClientsWithPreviousAssignedTask arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00200] For method findClientsWithPreviousAssignedTask list of called methods Object monObjet|V previousActiveTaskAssignment_getN196205"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#200"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00200] The argument clientsWithin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClientsWithPreviousAssignedTask@POLYN196051 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method findLeastLoadedClientWithPreviousStandByTask arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00208] For method findLeastLoadedClientWithPreviousStandByTask list of called methods Object monObjet|V previousStandbyTaskAssignment_getN196747"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoadedClientWithPreviousStandByTask@POLYN196572 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoadedClientWithPreviousStandByTask@POLYN196572 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method leastLoaded arguments TaskId  taskId|Set&lt;UUID &gt;  clientIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00218] For method leastLoaded list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState findLeastLoadedN197370"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.leastLoaded@POLYN197216 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.leastLoaded@POLYN197216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.leastLoaded@POLYN197216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method findLeastLoaded arguments TaskId  taskId|Set&lt;UUID &gt;  clientIds|boolean  checkTaskPairs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00226] For method findLeastLoaded list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState clients_getN198015"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00231] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN197699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN197699 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN197699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method mapPreviousTaskAssignment arguments Map&lt;UUID ,ClientState &gt;  clients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#249"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00249] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00251] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00263] For method sumCapacity arguments Collection&lt;ClientState &gt;  values"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00263] For method sumCapacity list of called methods Object monObjet|int client_capacityN199821"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.sumCapacity@POLYN199567 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method hasNewPair arguments TaskId  task1|Set&lt;TaskId &gt;  taskIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.hasNewPair@POLYN200287 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.hasNewPair@POLYN200287 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.hasNewPair@POLYN200287 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#293"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00293] For method addPairs arguments TaskId  taskId|Set&lt;TaskId &gt;  assigned"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#299"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00299] For method pair arguments TaskId  task1|TaskId  task2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#299"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00299] The argument task1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.pair@POLYN201155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#316"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00316] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00320] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.Pair.equals@POLYN201917 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.Pair.equals@POLYN201917 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.Pair.equals@POLYN201917 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClientsWithPreviousAssignedTask@POLYN196051"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00178] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN194441 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00202] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClientsWithPreviousAssignedTask@POLYN196051 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
