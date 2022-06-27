console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java 69 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.coordinator.NodeManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.coordinator.NodeManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NodeManager"
 , "c2" : "NodeManager(Node;TaskManager)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "rescheduleNextHeartbeat(long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createWorker(long;String;TaskSpec)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopWorker(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "destroyWorker(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown(boolean)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "43"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00033] The class NodeManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00039] The class ManagedWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.trogdor.coordinator.NodeManager.ManagedWorker.tryCreate@POLYN217527 the MagicNumber/String  '{}: error creating worker {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.coordinator.NodeManager.ManagedWorker.tryStop@POLYN217941 the MagicNumber/String  '{}: error stopping worker {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.trogdor.coordinator.NodeManager.ManagedWorker.toString@POLYN218338 the MagicNumber/String  '%s_%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN219163 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN219163 the MagicNumber/String  'NodeManager(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN219163 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeManager@POLYN219163 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method rescheduleNextHeartbeat arguments long  initialDelayMs"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.trogdor.coordinator.NodeManager.rescheduleNextHeartbeat@POLYN220201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.trogdor.coordinator.NodeManager.rescheduleNextHeartbeat@POLYN220201 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00123] The class NodeHeartbeat contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00133] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00138] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN220707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN220707 the MagicNumber/String  '{}: failed to get agent status: ConnectException {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN220707 the MagicNumber/String  '{}: failed to get agent status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN220707 the MagicNumber/String  '{}: got heartbeat status {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.run@POLYN220707 the MagicNumber/String  '{}: Unhandled exception in NodeHeartbeatRunnable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method handleMissingWorkers arguments AgentStatusResponse  agentStatus"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument agentStatus is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00153] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method handlePresentWorkers arguments AgentStatusResponse  agentStatus"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument agentStatus is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN222606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN222606 the MagicNumber/String  '{}: scheduling unknown worker with ID {} for stopping.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN222606 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN222606 the MagicNumber/String  '{}: worker state is still {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN222606 the MagicNumber/String  '{}: worker state changed from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.trogdor.coordinator.NodeManager.NodeHeartbeat.handlePresentWorkers@POLYN222606 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method createWorker arguments long  workerId|String  taskId|TaskSpec  spec"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00202] The class CreateWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  '{}: there is already a worker {} with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  '{}: scheduling worker {} to start.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.trogdor.coordinator.NodeManager.CreateWorker.call@POLYN225545 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#230"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00230] For method stopWorker arguments long  workerId"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00235] The class StopWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  '{}: unable to locate worker to stop with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  '{}: Worker {} is already scheduled to stop.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  '{}: scheduling worker {} to stop.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.coordinator.NodeManager.StopWorker.call@POLYN227070 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00262] For method destroyWorker arguments long  workerId"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00267] The class DestroyWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN228543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN228543 the MagicNumber/String  '{}: unable to locate worker to destroy with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN228543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN228543 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.trogdor.coordinator.NodeManager.DestroyWorker.call@POLYN228543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#286"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00286] For method beginShutdown arguments boolean  stopNode"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.trogdor.coordinator.NodeManager.beginShutdown@POLYN229045 the MagicNumber/String  '{}: Failed to send shutdown request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/NodeManager.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.trogdor.coordinator.NodeManager.waitForShutdown@POLYN229469 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
