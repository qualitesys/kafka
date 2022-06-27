console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java 239 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractHerder"
 , "c2" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StandaloneHerder"
 , "c2" : "StandaloneHerder(Worker;String;ConnectorClientConfigOverridePolicy)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StandaloneHerder"
 , "c2" : "StandaloneHerder(Worker;String;String;StatusBackingStore;MemoryConfigBackingStore;ConnectorClientConfigOverridePolicy)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "generation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "connectors(Callback<Collection<String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "connectorInfo(String;Callback<ConnectorInfo>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorInfo"
 , "c2" : "createConnectorInfo(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "rawConfig(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteConnectorConfig(String;Callback<Created<ConnectorInfo>>)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putConnectorConfig(String;Map<String,String>;boolean;Callback<Created<ConnectorInfo>>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putConnectorConfig(String;Map<String,String>;boolean;Callback<Created<ConnectorInfo>>;ConfigInfos)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestTaskReconfiguration(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "taskConfigs(String;Callback<List<TaskInfo>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTaskConfigs(String;List<Map<String,String>>;Callback<Void>;InternalRequestSignature)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "fenceZombieSourceTasks(String;Callback<Void>;InternalRequestSignature)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restartTask(ConnectorTaskId;Callback<Void>)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restartConnector(String;Callback<Void>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "HerderRequest"
 , "c2" : "restartConnector(long;String;Callback<Void>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restartConnectorAndTasks(RestartRequest;Callback<ConnectorStateInfo>)"
 , "c3" : "9"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startConnector(String;Callback<TargetState>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "List<Map<String,String>>"
 , "c2" : "recomputeTaskConfigs(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createConnectorTasks(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createConnectorTasks(String;Collection<ConnectorTaskId>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "startTask(ConnectorTaskId;Map<String,String>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeConnectorTasks(String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateConnectorTasks(String)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "tasksConfig(String;Callback<Map<ConnectorTaskId,Map<String,String>>>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this" }
,
{ "ligne" :  "R1:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.connName" }
,
{ "ligne" :  "R2:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.config" }
,
{ "ligne" :  "R3:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.allowReplace" }
,
{ "ligne" :  "R4:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.callback" }
,
{ "ligne" :  "R5:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.configInfos" }
,
{ "ligne" :  "R6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN244135.connName" }
,
{ "ligne" :  "R7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586.request" }
,
{ "ligne" :  "R8:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586.cb" }
,
{ "ligne" :  "R9:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276.connName" }
,
{ "ligne" :  "R10:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276.callback" }
,
{ "ligne" :  "R11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970.taskId" }
,
{ "ligne" :  "R12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970.cb" }
,
{ "ligne" :  "R13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383.connName" }
,
{ "ligne" :  "R14:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383.cb" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 (R0 in line [00184],R1 in line [00184],R2 in line [00184],R3 in line [00184],R4 in line [00184],R5 in line [00184])" }
,
{ "ligne" : "S0:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN414148" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN244135 (R0 in line [00225],R6 in line [00225])" }
,
{ "ligne" : "S1:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN222730" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 (R0 in line [00292],R7 in line [00292],R8 in line [00292])" }
,
{ "ligne" : "S2:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN177194" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 (R0 in line [00144],R9 in line [00144],R10 in line [00144])" }
,
{ "ligne" : "S3:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN254385" }
,
{ "ligne" : "S3:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN218197" }
 ]
 } }
,
{ "sequence" : { "noseq" : "4" , "pas" : [
{ "ligne" : "S4:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 (R0 in line [00257],R11 in line [00257],R12 in line [00257])" }
,
{ "ligne" : "S4:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN215301" }
 ]
 } }
,
{ "sequence" : { "noseq" : "5" , "pas" : [
{ "ligne" : "S5:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383 (R0 in line [00274],R13 in line [00274],R14 in line [00274])" }
,
{ "ligne" : "S5:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN414148" }
 ]
 } }
,
{ "sequence" : { "noseq" : "6" , "pas" : [
{ "ligne" : "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 (R0 in line [00184],R1 in line [00184],R2 in line [00184],R3 in line [00184],R4 in line [00184],R5 in line [00184])" }
,
{ "ligne" : "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 (R0 in line [00184],R1 in line [00184],R2 in line [00184],R3 in line [00184],R4 in line [00184],R5 in line [00184])" }
,
{ "ligne" : "S6:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN414148" }
 ]
 } }
,
{ "sequence" : { "noseq" : "7" , "pas" : [
{ "ligne" : "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 (R0 in line [00292],R7 in line [00292],R8 in line [00292])" }
,
{ "ligne" : "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 (R0 in line [00292],R7 in line [00292],R8 in line [00292])" }
,
{ "ligne" : "S7:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN177194" }
 ]
 } }
,
{ "sequence" : { "noseq" : "8" , "pas" : [
{ "ligne" : "S8:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 (R0 in line [00144],R9 in line [00144],R10 in line [00144])" }
,
{ "ligne" : "S8:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 (R0 in line [00144],R9 in line [00144],R10 in line [00144])" }
,
{ "ligne" : "S8:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN254385" }
,
{ "ligne" : "S8:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN218197" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "45"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "88"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "19"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument worker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument configBackingStore is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#80"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00080] Lock statement on synchronized method start"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457 the MagicNumber/String  'Herder starting' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457 the MagicNumber/String  'Herder started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#88"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00088] Lock statement on synchronized method stop"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00094] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String  'Herder stopping' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String  'Herder stopped' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.generation@POLYN238581 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#116"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00116] Lock statement on synchronized method connectors"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method connectors arguments Callback&lt;Collection&lt;String &gt; &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN238680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#121"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00121] Lock statement on synchronized method connectorInfo"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method connectorInfo arguments String  connName|Callback&lt;ConnectorInfo &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#130"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00130] Lock statement on synchronized method createConnectorInfo"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method createConnectorInfo arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00130] For method createConnectorInfo list of called methods Object monObjet|java.util.Map&lt;String,String&gt; configState_rawConnectorConfigN239736"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.createConnectorInfo@POLYN239485 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#139"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00139] Lock statement on synchronized method rawConfig"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method rawConfig arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#144"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00144] Lock statement on synchronized method deleteConnectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method deleteConnectorConfig arguments String  connName|Callback&lt;Created&lt;ConnectorInfo &gt; &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#164"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00164] Lock statement on synchronized method putConnectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method putConnectorConfig arguments String  connName|Map&lt;String ,String &gt;  config|boolean  allowReplace|Callback&lt;Created&lt;ConnectorInfo &gt; &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN241344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN241344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN241344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#184"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00184] Lock statement on synchronized method putConnectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method putConnectorConfig arguments String  connName|Map&lt;String ,String &gt;  config|boolean  allowReplace|Callback&lt;Created&lt;ConnectorInfo &gt; &gt;  callback|ConfigInfos  configInfos"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  ' already exists' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#225"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00225] Lock statement on synchronized method requestTaskReconfiguration"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method requestTaskReconfiguration arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN244135 the MagicNumber/String  'Task that requested reconfiguration does not exist: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#234"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00234] Lock statement on synchronized method taskConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method taskConfigs arguments String  connName|Callback&lt;List&lt;TaskInfo &gt; &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#234"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00234] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method putTaskConfigs arguments String  connName|List&lt;Map&lt;String ,String &gt; &gt;  configs|Callback&lt;Void &gt;  callback|InternalRequestSignature  requestSignature"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putTaskConfigs@POLYN245440 the MagicNumber/String  'Kafka Connect in standalone mode does not support externally setting task configurations.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method fenceZombieSourceTasks arguments String  connName|Callback&lt;Void &gt;  callback|InternalRequestSignature  requestSignature"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.fenceZombieSourceTasks@POLYN245744 the MagicNumber/String  'Kafka Connect in standalone mode does not support exactly-once source connectors.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#257"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00257] Lock statement on synchronized method restartTask"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00257] For method restartTask arguments ConnectorTaskId  taskId|Callback&lt;Void &gt;  cb"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00257] For method restartTask list of called methods Object monObjet|java.util.Map&lt;String,String&gt; configState_taskConfigN246473|java.util.Map&lt;String,String&gt; configState_connectorConfigN246867"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#257"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00257] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#257"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00257] The argument cb is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  'Task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  'Failed to start task: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#274"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00274] Lock statement on synchronized method restartConnector"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method restartConnector arguments String  connName|Callback&lt;Void &gt;  cb"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#274"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00274] The argument cb is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#284"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00284] Lock statement on synchronized method restartConnector"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method restartConnector arguments long  delayMs|String  connName|Callback&lt;Void &gt;  cb"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#292"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00292] Lock statement on synchronized method restartConnectorAndTasks"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00292] For method restartConnectorAndTasks arguments RestartRequest  request|Callback&lt;ConnectorStateInfo &gt;  cb"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00292] For method restartConnectorAndTasks list of called methods Object monObjet|String request_connectorNameN248725|java.util.Optional&lt;org.apache.kafka.connect.runtime.RestartPlan&gt; buildRestartPlanN249116"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#292"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00292] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#292"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00292] The argument cb is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Unknown connector: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Status for connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Received {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Restarting connector '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Connector '{}' restart successful' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Connector '{}' restart failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Restarting {} of {} tasks for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Restarted {} of {} tasks for {} as requested' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  'Completed {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00340] For method startConnector arguments String  connName|Callback&lt;TargetState &gt;  onStart"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00340] For method startConnector list of called methods Object monObjet|java.util.Map&lt;String,String&gt; configState_connectorConfigN251623|TargetState configState_targetStateN251717"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#346"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00346] For method recomputeTaskConfigs arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#346"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00346] For method recomputeTaskConfigs list of called methods Object monObjet|java.util.Map&lt;String,String&gt; configState_connectorConfigN252218|boolean worker_isSinkConnectorN252312"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#356"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00356] For method createConnectorTasks arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#356"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00356] For method createConnectorTasks list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.connect.util.ConnectorTaskId&gt; configState_tasksN252814"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#361"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00361] For method createConnectorTasks arguments String  connName|Collection&lt;ConnectorTaskId &gt;  taskIds"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#361"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00361] For method createConnectorTasks list of called methods Object monObjet|java.util.Map&lt;String,String&gt; configState_connectorConfigN253139"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#368"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00368] For method startTask arguments ConnectorTaskId  taskId|Map&lt;String ,String &gt;  connProps"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#368"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00368] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#368"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00368] The argument connProps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.startTask@POLYN253373 the MagicNumber/String  'Failed to start task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.startTask@POLYN253373 the MagicNumber/String  ' since it is not a recognizable type (source or sink)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#393"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00393] For method removeConnectorTasks arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#393"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00393] For method removeConnectorTasks list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.connect.util.ConnectorTaskId&gt; configState_tasksN254499"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#402"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00402] For method updateConnectorTasks arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#402"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00402] For method updateConnectorTasks list of called methods Object monObjet|java.util.List&lt;Map&lt;String,String&gt;&gt; recomputeTaskConfigsN255225|java.util.List&lt;Map&lt;String,String&gt;&gt; configState_allTaskConfigsN255369|java.util.List&lt;Map&lt;String,String&gt;&gt; reverseTransformN255681"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN254865 the MagicNumber/String  'Skipping update of connector {} since it is not running' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00424] The class ConfigUpdateListener contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#428"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00428] For method onConnectorConfigRemove arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#429"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00429] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#435"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00435] For method onConnectorConfigUpdate arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#439"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00439] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00445] For method onTaskConfigUpdate arguments Collection&lt;ConnectorTaskId &gt;  tasks"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#446"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00446] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#452"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00452] For method onConnectorTargetStateChange arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#452"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00452] For method onConnectorTargetStateChange list of called methods Object monObjet|TargetState configState_targetStateN256878"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#453"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00453] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.ConfigUpdateListener.onConnectorTargetStateChange@POLYN256656 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.ConfigUpdateListener.onConnectorTargetStateChange@POLYN256656 the MagicNumber/String  'Failed to transition connector {} to target state {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#470"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00470] For method onSessionKeyUpdate arguments SessionKey  sessionKey"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#475"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00475] For method onRestartRequest arguments RestartRequest  restartRequest"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00470] Void method onSessionKeyUpdate is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00470] Void method onSessionKeyUpdate is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#475"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00475] Void method onRestartRequest is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#475"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00475] Void method onRestartRequest is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00480] The class StandaloneHerderRequest contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.StandaloneHerderRequest.cancel@POLYN258085 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#495"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00495] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.StandaloneHerderRequest.equals@POLYN258221 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.StandaloneHerderRequest.equals@POLYN258221 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#510"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00510] For method tasksConfig arguments String  connName|Callback&lt;Map&lt;ConnectorTaskId ,Map&lt;String ,String &gt; &gt; &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#510"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00510] For method tasksConfig list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.connect.util.ConnectorTaskId,Map&lt;String,String&gt;&gt; buildTasksConfigN259073"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#510"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00510] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786 the MagicNumber/String  ' not found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.connName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.config"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.allowReplace"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.callback"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R5 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN242257.configInfos"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R6 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN244135.connName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R7 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586.request"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R8 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586.cb"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R9 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276.connName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R10 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276.callback"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R11 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970.taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R12 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN245970.cb"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R13 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383.connName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R14 : org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN247383.cb"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN254865"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN254865 the MagicNumber/String 'Skipping update of connector {} since it is not running' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Unknown connector: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String ' not found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Status for connector ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00308] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Received {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Restarting connector '{}'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Connector '{}' restart successful' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00326] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Connector '{}' restart failed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Restarting {} of {} tasks for {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00333] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Restarted {} of {} tasks for {} as requested' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00336] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String 'Completed {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00337] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN248586 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String 'Herder stopping' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String 30 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN237763 the MagicNumber/String 'Herder stopped' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String ' not found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String 'Connector ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN240276 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457 the MagicNumber/String 'Herder starting' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.start@POLYN237457 the MagicNumber/String 'Herder started' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String ' not found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String 'Connector ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN238911 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String ' not found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String 'Connector ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN244509 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00513] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786 the MagicNumber/String ' not found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00513] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786 the MagicNumber/String 'Connector ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/standalone/StandaloneHerder.java.html#516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00516] In the recursive method org.apache.kafka.connect.runtime.standalone.StandaloneHerder.tasksConfig@POLYN258786 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
