console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java 332 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConfigBackingStore"
 , "c2" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "TARGET_STATE_KEY(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "CONNECTOR_KEY(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "TASK_KEY(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "COMMIT_TASKS_KEY(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "TASK_COUNT_RECORD_KEY(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "RESTART_KEY(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConfigBackingStore"
 , "c2" : "KafkaConfigBackingStore(Converter;DistributedConfig;WorkerConfigTransformer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConfigBackingStore"
 , "c2" : "KafkaConfigBackingStore(Converter;DistributedConfig;WorkerConfigTransformer;Supplier<TopicAdmin>)"
 , "c3" : "2"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setUpdateListener(ConfigBackingStore.UpdateListener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "claimWritePrivileges()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "baseProducerProps(WorkerConfig)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "fencableProducerProps(DistributedConfig)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Producer<String,byte[]>"
 , "c2" : "createFencableProducer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ClusterConfigState"
 , "c2" : "snapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "contains(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putConnectorConfig(String;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeConnectorConfig(String)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeTaskConfigs(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTaskConfigs(String;List<Map<String,String>>)"
 , "c3" : "3"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "refresh(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTargetState(String;TargetState)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTaskCountRecord(String;int)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putSessionKey(SessionKey)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putRestartRequest(RestartRequest)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "KafkaBasedLog<String,byte[]>"
 , "c2" : "setupAndCreateKafkaBasedLog(String;WorkerConfig)"
 , "c3" : "4"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendPrivileged(String;byte[])"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "relinquishWritePrivileges()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KafkaBasedLog<String,byte[]>"
 , "c2" : "createKafkaBasedLog(String;Map<String,Object>;Map<String,Object>;Callback<ConsumerRecord<String,byte[]>>;NewTopic;Supplier<TopicAdmin>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processTargetStateRecord(String;SchemaAndValue)"
 , "c3" : "7"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processConnectorConfigRecord(String;SchemaAndValue)"
 , "c3" : "9"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processTaskConfigRecord(ConnectorTaskId;SchemaAndValue)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processTasksCommitRecord(String;SchemaAndValue)"
 , "c3" : "7"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "RestartRequest"
 , "c2" : "recordToRestartRequest(ConsumerRecord<String,byte[]>;SchemaAndValue)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processTaskCountRecord(String;SchemaAndValue)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processSessionKeyRecord(SchemaAndValue)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorTaskId"
 , "c2" : "parseTaskId(String)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Set<Integer>"
 , "c2" : "taskIds(String;Map<ConnectorTaskId,Map<String,String>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "completeTaskIdSet(Set<Integer>;int)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "intValue(Object)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "className(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock" }
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
 , "c4" : "76"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "14"
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
 , "c4" : "2"
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
 , "c4" : "163"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "35"
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
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00061] The class KafkaConfigBackingStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method TARGET_STATE_KEY arguments String  connectorName"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method CONNECTOR_KEY arguments String  connectorName"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method TASK_KEY arguments ConnectorTaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.TASK_KEY@POLYN377406 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method COMMIT_TASKS_KEY arguments String  connectorName"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method TASK_COUNT_RECORD_KEY arguments String  connectorName"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method RESTART_KEY arguments String  connectorName"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00188] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382626 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382626 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382626 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382626 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.KafkaConfigBackingStore@POLYN382626 the MagicNumber/String  'Must specify topic for connector configuration.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method setUpdateListener arguments ConfigBackingStore.UpdateListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'Starting KafkaConfigBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'Enabling exactly-once support for source connectors requires a Kafka broker version that allows ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'admin clients to read consumer offsets. Please either disable the worker's exactly-once ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'support for source connectors, or use a newer Kafka broker version.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'Topic '%s' supplied via the '%s' property is required ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'to have a single partition in order to guarantee consistency of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'connector configurations, but found %d partitions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String  'Started KafkaConfigBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String  'Closing KafkaConfigBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String  'fencable producer for config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String  'admin for config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String  'KafkaBasedLog for config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String  'Closed KafkaConfigBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.claimWritePrivileges@POLYN385816 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.claimWritePrivileges@POLYN385816 the MagicNumber/String  'Failed to create and initialize fencable producer for config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method baseProducerProps arguments WorkerConfig  workerConfig"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00274] For method baseProducerProps list of called methods Object monObjet|String ConnectUtils_lookupKafkaClusterIdN386582"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#274"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00274] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method fencableProducerProps arguments DistributedConfig  workerConfig"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#285"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00285] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  'for the worker's config topic producer when exactly-once source support is enabled or in preparation to be enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  'for the worker's config topic producer when exactly-once source support is enabled or in preparation to be enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.fencableProducerProps@POLYN387205 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#315"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00315] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00335] For method contains arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#336"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00336] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#343"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00343] For method putConnectorConfig arguments String  connector|Map&lt;String ,String &gt;  properties"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#343"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00343] For method putConnectorConfig list of called methods Object monObjet|byte[] converter_fromConnectDataN390171"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN389727 the MagicNumber/String  'Writing connector configuration for connector '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN389727 the MagicNumber/String  'properties' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN389727 the MagicNumber/String  'Failed to write connector configuration to Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN389727 the MagicNumber/String  'Error writing connector configuration to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#359"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00359] For method removeConnectorConfig arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.removeConnectorConfig@POLYN391153 the MagicNumber/String  'Removing connector configuration for connector '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.removeConnectorConfig@POLYN391153 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.removeConnectorConfig@POLYN391153 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.removeConnectorConfig@POLYN391153 the MagicNumber/String  'Failed to remove connector configuration from Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.removeConnectorConfig@POLYN391153 the MagicNumber/String  'Error removing connector configuration from Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#372"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00372] For method removeTaskConfigs arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.removeTaskConfigs@POLYN391964 the MagicNumber/String  'Removal of tasks is not currently supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#378"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00378] For method putTaskConfigs arguments String  connector|List&lt;Map&lt;String ,String &gt; &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#378"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00378] For method putTaskConfigs list of called methods Object monObjet|byte[] converter_fromConnectDataN393669"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#378"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00378] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00397] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'Failed to write root configuration to Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'Error writing root configuration to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'properties' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'Writing configuration for connector '{}' task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'tasks' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'Writing commit for connector '{}' with {} tasks.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'Failed to write root configuration to Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN392653 the MagicNumber/String  'Error writing root configuration to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00425] For method refresh arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.refresh@POLYN395344 the MagicNumber/String  'Error trying to read to end of config log' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#435"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00435] For method putTargetState arguments String  connector|TargetState  state"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#435"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00435] For method putTargetState list of called methods Object monObjet|byte[] converter_fromConnectDataN396266"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#435"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00435] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTargetState@POLYN395934 the MagicNumber/String  'state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTargetState@POLYN395934 the MagicNumber/String  'Writing target state {} for connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00445] For method putTaskCountRecord arguments String  connector|int  taskCount"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00445] For method putTaskCountRecord list of called methods Object monObjet|byte[] converter_fromConnectDataN397387"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String  'task-count' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String  'Writing task count record {} for connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String  'Failed to write task count record with {} tasks for connector {} to Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String  'Error writing task count record to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#461"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00461] For method putSessionKey arguments SessionKey  sessionKey"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#461"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00461] For method putSessionKey list of called methods Object monObjet|byte[] converter_fromConnectDataN399299"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#461"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00461] The argument sessionKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String  'Distributing new session key' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String  'key' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String  'algorithm' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String  'creation-timestamp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String  'Failed to write session key to Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String  'Error writing session key to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#479"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00479] For method putRestartRequest arguments RestartRequest  restartRequest"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#479"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00479] For method putRestartRequest list of called methods Object monObjet|String RESTART_KEYN400351|byte[] converter_fromConnectDataN400782"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#479"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00479] The argument restartRequest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String  'Writing {} to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String  'Failed to write {} to Kafka: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String  'Error writing ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String  ' to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#496"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00496] For method setupAndCreateKafkaBasedLog arguments String  topic|WorkerConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#496"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00496] For method setupAndCreateKafkaBasedLog list of called methods Object monObjet|String ConnectUtils_lookupKafkaClusterIdN401777|java.util.Map&lt;String,Object&gt; config_originalsN401908|org.apache.kafka.connect.util.TopicAdmin.NewTopicBuilder TopicAdmin_defineTopicN403651"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#496"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00496] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String  'for the worker's config topic consumer when exactly-once source support is enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#537"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00537] For method sendPrivileged arguments String  key|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String  'Cannot produce to config topic without claiming write privileges first' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00552] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String  'Failed to perform fencable send to config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#554"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00554] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String  'Failed to perform fencable send to config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.relinquishWritePrivileges@POLYN405094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.relinquishWritePrivileges@POLYN405094 the MagicNumber/String  'fencable producer for config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00561] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.relinquishWritePrivileges@POLYN405094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00565] For method createKafkaBasedLog arguments String  topic|Map&lt;String ,Object &gt;  producerProps|Map&lt;String ,Object &gt;  consumerProps|Callback&lt;ConsumerRecord&lt;String ,byte[] &gt; &gt;  consumedCallback|NewTopic  topicDescription|Supplier&lt;TopicAdmin &gt;  adminSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00565] For method createKafkaBasedLog list of called methods Object monObjet|KafkaBasedLog&lt;String,byte[]&gt; admin_createTopicsN406078"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489 the MagicNumber/String  'Creating admin client to manage Connect internal config topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489 the MagicNumber/String  'Using admin client to check cleanup policy of '{}' topic is '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489 the MagicNumber/String  'connector configurations' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00583"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00583] The class ConsumeCallback contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#585"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00585] For method onCompletion arguments Throwable  error|ConsumerRecord&lt;String ,byte[] &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#585"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00585] For method onCompletion list of called methods Object monObjet|KafkaBasedLog&lt;String,byte[]&gt; record_keyN407741|KafkaBasedLog&lt;String,byte[]&gt; record_keyN408068|org.apache.kafka.connect.util.ConnectorTaskId parseTaskIdN408395|KafkaBasedLog&lt;String,byte[]&gt; record_keyN408899|org.apache.kafka.connect.runtime.RestartRequest recordToRestartRequestN409226|KafkaBasedLog&lt;String,byte[]&gt; record_keyN409611"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#585"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00585] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00596] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00587"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  'Unexpected in consumer callback for KafkaConfigBackingStore: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  'Failed to convert config data to Kafka Connect format: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00611"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00611] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  'Ignoring task configuration because {} couldn't be parsed as a task config key' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00630] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.ConsumeCallback.onCompletion@POLYN406843 the MagicNumber/String  'Discarding config update record with invalid key: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#636"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00636] For method processTargetStateRecord arguments String  connectorName|SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#636"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00636] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#638"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00638] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00668] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00637] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00639"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'Removed target state for connector {} due to null value in topic.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00643"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#643"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00643] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00651"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'Ignoring target state for connector '{}' because it is in the wrong format: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00657"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00657] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'Invalid data for target state for connector '{}': 'state' field should be a String but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00664] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'Setting target state for connector '{}' to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00667"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00667] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String  'Invalid target state for connector '{}': {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00679"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#679"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00679] For method processConnectorConfigRecord arguments String  connectorName|SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00679"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#679"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00679] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00681"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#681"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00681] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00682"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00682] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00684"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00684] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'Successfully processed removal of connector '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00692"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#692"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00692] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'Ignoring configuration for connector '{}' because it is in the wrong format: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00695"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00695] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00696"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00696] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'properties' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00698] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'Invalid data for config for connector '{}': 'properties' field should be a Map but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'Updating configuration for connector '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processConnectorConfigRecord@POLYN412274 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00721"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#721"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00721] For method processTaskConfigRecord arguments ConnectorTaskId  taskId|SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00721"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#721"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00721] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00721"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#721"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00721] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00722"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#722"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00722] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#723"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00723] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'Ignoring task configuration for task {} because it is unexpectedly null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'Ignoring task configuration for task {} because the value is not a Map but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00732] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'properties' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'Invalid data for config of task {} 'properties' field should be a Map but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00740"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#740"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00740] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'Storing new config for task {}; this will wait for a commit message before the new config will take effect.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#747"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00747] For method processTasksCommitRecord arguments String  connectorName|SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#747"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00747] For method processTasksCommitRecord list of called methods Object monObjet|java.util.Set&lt;Integer&gt; taskIdsN417461"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#747"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00747] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00749"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#749"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00749] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#772"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00772] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  'Ignoring connector tasks configuration commit for connector '{}' because it is in the wrong format: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00777"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00777] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  'tasks' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00788"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  'We have an incomplete set of task configs for connector '{}' probably due to compaction. So we are not doing anything with the new configuration.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00801"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#801"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00801] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN416433 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00815"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#815"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00815] For method recordToRestartRequest arguments ConsumerRecord&lt;String ,byte[] &gt;  record|SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00815"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#815"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00815] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00815"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#815"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00815] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00818"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String  'Ignoring restart request because the value is not a Map but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00819"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#819"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00819] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#827"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00827] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String  'Invalid data for restart request '{}' field should be a Boolean but is {}, defaulting to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00836"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#836"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00836] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String  'Invalid data for restart request '{}' field should be a Boolean but is {}, defaulting to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00844"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#844"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00844] For method processTaskCountRecord arguments String  connectorName|SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00844"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#844"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00844] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00846"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskCountRecord@POLYN420734 the MagicNumber/String  'Ignoring task count record for connector '{}' because it is in the wrong format: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00849"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00849] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskCountRecord@POLYN420734 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskCountRecord@POLYN420734 the MagicNumber/String  'task-count' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00852"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#852"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00852] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskCountRecord@POLYN420734 the MagicNumber/String  'Setting task count record for connector '{}' to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00859"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#859"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00859] For method processSessionKeyRecord arguments SchemaAndValue  value"
}} 
,
{ "ligne" : {
   "c1" : "00859"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#859"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00859] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00860"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#860"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00860] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00861"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#861"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00861] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'Ignoring session key because it is unexpectedly null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00865"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#865"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00865] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'Ignoring session key because the value is not a Map but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00869] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00872] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'key' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00874] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'Invalid data for session key 'key' field should be a String but is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00879"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#879"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00879] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'algorithm' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00881"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#881"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00881] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'Invalid data for session key 'algorithm' field should be a String but it is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00885] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'creation-timestamp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00887] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String  'Invalid data for session key 'creation-timestamp' field should be a long but it is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00899"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#899"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00899] For method parseTaskId arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00899"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#899"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00899] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00900"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#900"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00900] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00901"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#901"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00901] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00901"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#901"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00901] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00908"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#908"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00908] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.parseTaskId@POLYN423925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00913"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#913"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00913] For method taskIds arguments String  connector|Map&lt;ConnectorTaskId ,Map&lt;String ,String &gt; &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00915"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#915"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00915] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.taskIds@POLYN424875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00925"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#925"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00925] For method completeTaskIdSet arguments Set&lt;Integer &gt;  idSet|int  expectedSize"
}} 
,
{ "ligne" : {
   "c1" : "00925"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#925"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00925] The argument idSet is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00949"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#949"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00949] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.completeTaskIdSet@POLYN425576 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00951"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#951"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00951] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.completeTaskIdSet@POLYN425576 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00953"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#953"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00953] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.completeTaskIdSet@POLYN425576 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.completeTaskIdSet@POLYN425576 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#959"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00959] For method intValue arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00965] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.intValue@POLYN426111 the MagicNumber/String  'Expected integer value to be either Integer or Long' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00968"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#968"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00968] For method className arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00969"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00969] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.className@POLYN426480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00969"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00969] In method org.apache.kafka.connect.storage.KafkaConfigBackingStore.className@POLYN426480 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.intValue@POLYN426111"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTargetState@POLYN395934"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00509] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String 'for the worker's config topic consumer when exactly-once source support is enabled' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#510"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00510] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00517] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#530"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00530] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.setupAndCreateKafkaBasedLog@POLYN401512 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00570] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489 the MagicNumber/String 'Creating admin client to manage Connect internal config topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00575] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489 the MagicNumber/String 'Using admin client to check cleanup policy of '{}' topic is '{}'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#577"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00577] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.createKafkaBasedLog@POLYN405489 the MagicNumber/String 'connector configurations' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#480"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00480] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String 'Writing {} to Kafka' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00490] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String 'Failed to write {} to Kafka: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00491] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String ' to Kafka' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00491] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putRestartRequest@POLYN400163 the MagicNumber/String 'Error writing ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00543] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00544] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String 'Cannot produce to config topic without claiming write privileges first' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00552] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String 'Failed to perform fencable send to config topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00554] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN404114 the MagicNumber/String 'Failed to perform fencable send to config topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00462] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String 'Distributing new session key' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#464"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00464] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String 'key' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00465] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String 'algorithm' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00466] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String 'creation-timestamp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00472] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String 'Failed to write session key to Kafka: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00473] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putSessionKey@POLYN398590 the MagicNumber/String 'Error writing session key to Kafka' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00447] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String 'task-count' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00449] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String 'Writing task count record {} for connector {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String 'Failed to write task count record with {} tasks for connector {} to Kafka: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00455] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskCountRecord@POLYN397075 the MagicNumber/String 'Error writing task count record to Kafka' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00818"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#818"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00818] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String 'Ignoring restart request because the value is not a Map but is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00819"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#819"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00819] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#827"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00827] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String 'Invalid data for restart request '{}' field should be a Boolean but is {}, defaulting to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00836"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#836"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00836] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.recordToRestartRequest@POLYN418806 the MagicNumber/String 'Invalid data for restart request '{}' field should be a Boolean but is {}, defaulting to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#637"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00637] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00639"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#639"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00639] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00641] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'Removed target state for connector {} due to null value in topic.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00643"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#643"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00643] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00651"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00651] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'Ignoring target state for connector '{}' because it is in the wrong format: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00654] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'unchecked' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00655] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'state' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00657"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#657"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00657] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'Invalid data for target state for connector '{}': 'state' field should be a String but is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#664"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00664] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'Setting target state for connector '{}' to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00667"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#667"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00667] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTargetStateRecord@POLYN410111 the MagicNumber/String 'Invalid target state for connector '{}': {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00723] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#724"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00724] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'Ignoring task configuration for task {} because it is unexpectedly null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00728] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'Ignoring task configuration for task {} because the value is not a Map but is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00732] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'unchecked' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00733] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'properties' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00735] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'Invalid data for config of task {} 'properties' field should be a Map but is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00740"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#740"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00740] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'Storing new config for task {}; this will wait for a commit message before the new config will take effect.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00741] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTaskConfigRecord@POLYN414645 the MagicNumber/String 'unchecked' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00860"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#860"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00860] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00861"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#861"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00861] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'Ignoring session key because it is unexpectedly null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00865"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00865] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'Ignoring session key because the value is not a Map but is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#869"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00869] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'unchecked' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#872"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00872] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'key' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#874"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00874] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'Invalid data for session key 'key' field should be a String but is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00879"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#879"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00879] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'algorithm' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00881"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#881"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00881] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'Invalid data for session key 'algorithm' field should be a String but it is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00885] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'creation-timestamp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#887"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00887] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.processSessionKeyRecord@POLYN421674 the MagicNumber/String 'Invalid data for session key 'creation-timestamp' field should be a long but it is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#965"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00965] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.intValue@POLYN426111 the MagicNumber/String 'Expected integer value to be either Integer or Long' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTargetState@POLYN395934 the MagicNumber/String 'state' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00439] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTargetState@POLYN395934 the MagicNumber/String 'Writing target state {} for connector {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00221] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'Starting KafkaConfigBackingStore' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00228] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'Enabling exactly-once support for source connectors requires a Kafka broker version that allows ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00229] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'admin clients to read consumer offsets. Please either disable the worker's exactly-once ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00230] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'support for source connectors, or use a newer Kafka broker version.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'Topic '%s' supplied via the '%s' property is required ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'to have a single partition in order to guarantee consistency of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00239] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'connector configurations, but found %d partitions.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00244] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.start@POLYN384206 the MagicNumber/String 'Started KafkaConfigBackingStore' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String 'Closing KafkaConfigBackingStore' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String 'fencable producer for config topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00255] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String 'admin for config topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String 'KafkaBasedLog for config topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaConfigBackingStore.java.html#258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00258] In the recursive method org.apache.kafka.connect.storage.KafkaConfigBackingStore.stop@POLYN385166 the MagicNumber/String 'Closed KafkaConfigBackingStore' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
