console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java 6 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.Herder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.Herder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRunning()"
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
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "connectorConfig(String;Callback<Map<String,String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "tasksConfig(String;Callback<Map<ConnectorTaskId,Map<String,String>>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putConnectorConfig(String;Map<String,String>;boolean;Callback<Created<ConnectorInfo>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteConnectorConfig(String;Callback<Created<ConnectorInfo>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestTaskReconfiguration(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "taskConfigs(String;Callback<List<TaskInfo>>)"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "Collection<String>"
 , "c2" : "connectors()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorInfo"
 , "c2" : "connectorInfo(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorStateInfo"
 , "c2" : "connectorStatus(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ActiveTopicsInfo"
 , "c2" : "connectorActiveTopics(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetConnectorActiveTopics(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StatusBackingStore"
 , "c2" : "statusBackingStore()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorStateInfo.TaskState"
 , "c2" : "taskStatus(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateConnectorConfig(Map<String,String>;Callback<ConfigInfos>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateConnectorConfig(Map<String,String>;Callback<ConfigInfos>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restartTask(ConnectorTaskId;Callback<Void>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restartConnector(String;Callback<Void>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "HerderRequest"
 , "c2" : "restartConnector(long;String;Callback<Void>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restartConnectorAndTasks(RestartRequest;Callback<ConnectorStateInfo>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pauseConnector(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resumeConnector(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Plugins"
 , "c2" : "plugins()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "kafkaClusterId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<ConfigKeyInfo>"
 , "c2" : "connectorPluginConfig(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00122] The class Created contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00142] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.connect.runtime.Herder.Created.equals@POLYN228569 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.runtime.Herder.Created.equals@POLYN228569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Herder.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.runtime.Herder.Created.equals@POLYN228569 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
