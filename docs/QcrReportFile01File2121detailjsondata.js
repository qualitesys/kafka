console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java 140 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.agent.WorkerManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.agent.WorkerManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WorkerManager"
 , "c2" : "WorkerManager(Platform;Scheduler)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<String>"
 , "c2" : "createWorker(long;String;TaskSpec)"
 , "c3" : "8"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopWorker(long;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "TreeMap<Long,WorkerState>"
 , "c2" : "workerStates()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.svg" }

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
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "96"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00038] The class WorkerManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00069] The class ShutdownManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00073] The class Reference contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#79"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00079] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.Reference.close@POLYN253293 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.Reference.close@POLYN253293 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.Reference.close@POLYN253293 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#89"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00089] Lock statement on synchronized method takeReference"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.takeReference@POLYN253739 the MagicNumber/String  'WorkerManager is shut down.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#97"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00097] Lock statement on synchronized method shutdown"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN254006 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN254006 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN254006 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN254006 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#108"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00108] Lock statement on synchronized method waitForQuiescence"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.waitForQuiescence@POLYN254355 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument scheduler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  'WorkerManagerStateThread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  'WorkerCleanupThread%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  'WorkerManagerShutdownThread%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN254604 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00138] The class Worker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#178"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00178] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.state@POLYN258062 the MagicNumber/String  'unreachable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToRunning@POLYN259004 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToRunning@POLYN259004 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToStopping@POLYN259455 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToStopping@POLYN259455 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToStopping@POLYN259455 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToDone@POLYN259870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToDone@POLYN259870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN260324 the MagicNumber/String  '%s_%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method createWorker arguments long  workerId|String  taskId|TaskSpec  spec"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#246"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00246] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: Ignoring request to create worker {}, because there is already ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  'a worker with that id.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: Will not run worker {} as it has expired.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  'worker expired' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: Worker {} is halting.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: Worker {} is halting with error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: Worker {} start() exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  'worker.start() exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: request conflict while creating worker {} for task {} with spec {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String  '{}: Error creating worker {} for task {} with spec {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00298] The class CreateWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  'There is already a worker ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  ' with a different task ID.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  'There is already a worker ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  ' with a different task spec.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  '{}: Created worker {} with spec {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN264673 the MagicNumber/String  '{}: unable to create worker {} for task {}, with spec {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00339] The class FinishCreatingWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN266441 the MagicNumber/String  '{}: Worker {} was cancelled while it was starting up.  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN266441 the MagicNumber/String  'Transitioning to STOPPING.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN266441 the MagicNumber/String  '{}: Worker {} is now RUNNING.  Scheduled to stop in {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN266441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00367] The class HandleWorkerHalting contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  'halting' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  'halting with error [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  '{}: Worker {} {} during startup.  Transitioning to DONE.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  '{}: Worker {} {} during startup.  Transitioning to CANCELLING.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  '{}: Cancelling worker {} {}.  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  '{}: Running worker {} {}.  Transitioning to STOPPING.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  '{}: Stopping worker {} {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  '{}: Can't halt worker {} because it is already DONE.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN267700 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00419] The class CompleteWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.trogdor.agent.WorkerManager.CompleteWorker.call@POLYN270019 the MagicNumber/String  '{}: destroying worker {} with error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.trogdor.agent.WorkerManager.CompleteWorker.call@POLYN270019 the MagicNumber/String  '{}: completed worker {} with error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.trogdor.agent.WorkerManager.CompleteWorker.call@POLYN270019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#447"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00447] For method stopWorker arguments long  workerId|boolean  mustDestroy"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00456] The class StopWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: Can't stop worker {} because there is no worker with that ID.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: Cancelling worker {} during its startup process.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: Can't stop worker {}, because it is already being ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  'cancelled.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: Stopping running worker {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: Can't stop worker {}, because it is already ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  'stopping.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: destroying worker {} with error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  '{}: Can't stop worker {}, because it is already done.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN271702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00510] The class HaltWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.trogdor.agent.WorkerManager.HaltWorker.call@POLYN273919 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00523"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.trogdor.agent.WorkerManager.HaltWorker.call@POLYN273919 the MagicNumber/String  '{}: worker.stop() exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.trogdor.agent.WorkerManager.HaltWorker.call@POLYN273919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00537] The class GetWorkerStates contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00556"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.trogdor.agent.WorkerManager.waitForShutdown@POLYN275675 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00560] The class Shutdown contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  '{}: Shutting down WorkerManager.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  '{}: Waiting for shutdownManager quiescence...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  '{}: Waiting for workerCleanupExecutor to terminate...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00571] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  '{}: Waiting for stateChangeExecutor to terminate...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00573"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00573] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  '{}: Shutting down shutdownExecutor.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  '{}: Caught exception while shutting down WorkerManager' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN275996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00585] The class DestroyAllWorkers contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00602"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#602"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00602] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00588"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN277457 the MagicNumber/String  '{}: Destroying all workers.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN277457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00603"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#603"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00603] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN277457 the MagicNumber/String  'Failed to stop worker {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00606"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN277457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.agent.WorkerManager.waitForShutdown@POLYN275675"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: Ignoring request to create worker {}, because there is already ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String 'a worker with that id.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: Will not run worker {} as it has expired.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String 'worker expired' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00264] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: Worker {} is halting.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00269] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: Worker {} is halting with error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: Worker {} start-- exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String 'worker.start-- exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: request conflict while creating worker {} for task {} with spec {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN260519 the MagicNumber/String '{}: Error creating worker {} for task {} with spec {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00556"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00556] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.waitForShutdown@POLYN275675 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
