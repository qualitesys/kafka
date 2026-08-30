console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java 63 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.coordinator.NodeManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.coordinator.NodeManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#156"
 , "c1" : "NodeManager"
 , "c2" : "NodeManager(Node;TaskManager)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#176"
 , "c1" : "void"
 , "c2" : "rescheduleNextHeartbeat(long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00270"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#270"
 , "c1" : "void"
 , "c2" : "createWorker(long;String;TaskSpec)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00309"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#309"
 , "c1" : "void"
 , "c2" : "stopWorker(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00347"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#347"
 , "c1" : "void"
 , "c2" : "destroyWorker(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00373"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#373"
 , "c1" : "void"
 , "c2" : "beginShutdown(boolean)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00384"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#384"
 , "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.svg" }

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
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "43"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.trogdor.coordinator.NodeManager.ManagedWorker.tryCreate@POLYN202337 the MagicNumber/String  '{}: error creating worker {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.coordinator.NodeManager.ManagedWorker.tryStop@POLYN202751 the MagicNumber/String  '{}: error stopping worker {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.coordinator.NodeManager.ManagedWorker.toString@POLYN203148 the MagicNumber/String  '%s_%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#156"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00156] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN203973 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN203973 the MagicNumber/String  'NodeManager(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN203973 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN203973 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method rescheduleNextHeartbeat arguments long  initialDelayMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.trogdor.coordinator.NodeManager.rescheduleNextHeartbeat@POLYN205011 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.trogdor.coordinator.NodeManager.rescheduleNextHeartbeat@POLYN205011 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00197] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00202] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN205517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN205517 the MagicNumber/String  '{}: failed to get agent status: ConnectException {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN205517 the MagicNumber/String  '{}: failed to get agent status' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN205517 the MagicNumber/String  '{}: got heartbeat status {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN205517 the MagicNumber/String  '{}: Unhandled exception in NodeHeartbeatRunnable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method handleMissingWorkers arguments AgentStatusResponse  agentStatus"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument agentStatus is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00220] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00222] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#230"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00230] For method handlePresentWorkers arguments AgentStatusResponse  agentStatus"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#230"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00230] The argument agentStatus is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00233] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00234] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00243] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00243] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00253] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00253] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN207422 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN207422 the MagicNumber/String  '{}: scheduling unknown worker with ID {} for stopping.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN207422 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN207422 the MagicNumber/String  '{}: worker state is still {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN207422 the MagicNumber/String  '{}: worker state changed from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN207422 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00270] For method createWorker arguments long  workerId|String  taskId|TaskSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  '{}: there is already a worker {} with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  '{}: scheduling worker {} to start.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN210367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#309"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00309] For method stopWorker arguments long  workerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  '{}: unable to locate worker to stop with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  '{}: Worker {} is already scheduled to stop.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  '{}: scheduling worker {} to stop.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00338"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN211894 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00347] For method destroyWorker arguments long  workerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN213369 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN213369 the MagicNumber/String  '{}: unable to locate worker to destroy with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN213369 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN213369 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN213369 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00373"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#373"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00373] For method beginShutdown arguments boolean  stopNode"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.trogdor.coordinator.NodeManager.beginShutdown@POLYN213873 the MagicNumber/String  '{}: Failed to send shutdown request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.trogdor.coordinator.NodeManager.waitForShutdown@POLYN214297 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
