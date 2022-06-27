console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java 97 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskAssignor"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StickyTaskAssignor"
 , "c2" : "StickyTaskAssignor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StickyTaskAssignor"
 , "c2" : "StickyTaskAssignor(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "assign(Map<UUID,ClientState>;Set<TaskId>;Set<TaskId>;AssignmentConfigs)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "assignStandby(int)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "assignActive()"
 , "c3" : "9"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "allocateTaskWithClientCandidates(TaskId;Set<UUID>;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "assignTaskToClient(Set<TaskId>;TaskId;ClientState)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<UUID>"
 , "c2" : "findClientsWithoutAssignedTask(TaskId)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ClientState"
 , "c2" : "findClient(TaskId;Set<UUID>)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldBalanceLoad(ClientState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasClientsWithMoreAvailableCapacity(ClientState)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ClientState"
 , "c2" : "findClientsWithPreviousAssignedTask(TaskId;Set<UUID>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ClientState"
 , "c2" : "findLeastLoadedClientWithPreviousStandByTask(TaskId;Set<UUID>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ClientState"
 , "c2" : "leastLoaded(TaskId;Set<UUID>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ClientState"
 , "c2" : "findLeastLoaded(TaskId;Set<UUID>;boolean)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "mapPreviousTaskAssignment(Map<UUID,ClientState>)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class StickyTaskAssignor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.StickyTaskAssignor@POLYN203860 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method assign arguments Map&lt;UUID ,ClientState &gt;  clients|Set&lt;TaskId &gt;  allTaskIds|Set&lt;TaskId &gt;  statefulTaskIds|AssignmentConfigs  configs"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument allTaskIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assign@POLYN204104 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assign@POLYN204104 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assign@POLYN204104 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method assignStandby arguments int  numStandbyReplicas"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00059] For method assignStandby list of called methods Object monObjet|java.util.Set&lt;java.util.UUID&gt; findClientsWithoutAssignedTaskN205386"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00062] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00062] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN205026 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN205026 the MagicNumber/String  'Unable to assign {} of {} standby tasks for task [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN205026 the MagicNumber/String  'There is not enough available capacity. You should ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN205026 the MagicNumber/String  'increase the number of threads and/or application instances ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN205026 the MagicNumber/String  'to maintain the requested number of standby replicas.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignStandby@POLYN205026 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method assignActive list of called methods Object monObjet|int sumCapacityN205952"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN205876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN205876 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method allocateTaskWithClientCandidates arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin|boolean  active"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00122] For method allocateTaskWithClientCandidates list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState findClientN208575"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method assignTaskToClient arguments Set&lt;TaskId &gt;  assigned|TaskId  taskId|ClientState  client"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument assigned is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method findClientsWithoutAssignedTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method findClient arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00149] For method findClient list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState findClientsWithPreviousAssignedTaskN210345|org.apache.kafka.streams.processor.internals.assignment.ClientState findLeastLoadedClientWithPreviousStandByTaskN210700"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument clientsWithin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method shouldBalanceLoad arguments ClientState  client"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00172] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method hasClientsWithMoreAvailableCapacity arguments ClientState  client"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.hasClientsWithMoreAvailableCapacity@POLYN211254 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.hasClientsWithMoreAvailableCapacity@POLYN211254 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method findClientsWithPreviousAssignedTask arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#185"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00185] The argument clientsWithin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClientsWithPreviousAssignedTask@POLYN211593 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00193] For method findLeastLoadedClientWithPreviousStandByTask arguments TaskId  taskId|Set&lt;UUID &gt;  clientsWithin"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoadedClientWithPreviousStandByTask@POLYN212114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoadedClientWithPreviousStandByTask@POLYN212114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method leastLoaded arguments TaskId  taskId|Set&lt;UUID &gt;  clientIds"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00203] For method leastLoaded list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState findLeastLoadedN212912"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.leastLoaded@POLYN212758 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.leastLoaded@POLYN212758 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.leastLoaded@POLYN212758 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method findLeastLoaded arguments TaskId  taskId|Set&lt;UUID &gt;  clientIds|boolean  checkTaskPairs"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00211] For method findLeastLoaded list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.assignment.ClientState clients_getN213557"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method mapPreviousTaskAssignment arguments Map&lt;UUID ,ClientState &gt;  clients"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#234"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00234] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00236] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00240] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method sumCapacity arguments Collection&lt;ClientState &gt;  values"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00248] For method sumCapacity list of called methods Object monObjet|int client_capacityN215363"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.sumCapacity@POLYN215109 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00256] The class TaskPairs contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method hasNewPair arguments TaskId  task1|Set&lt;TaskId &gt;  taskIds"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.hasNewPair@POLYN215829 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.hasNewPair@POLYN215829 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.hasNewPair@POLYN215829 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method addPairs arguments TaskId  taskId|Set&lt;TaskId &gt;  assigned"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method pair arguments TaskId  task1|TaskId  task2"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#284"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00284] The argument task1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.pair@POLYN216697 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00291] The class Pair contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#301"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00301] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00305] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.Pair.equals@POLYN217459 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.Pair.equals@POLYN217459 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.TaskPairs.Pair.equals@POLYN217459 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN205876"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClientsWithPreviousAssignedTask@POLYN211593"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN205876 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.assignActive@POLYN205876 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClient@POLYN209983 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findClientsWithPreviousAssignedTask@POLYN211593 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StickyTaskAssignor.java.html#221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00221] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StickyTaskAssignor.findLeastLoaded@POLYN213241 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
