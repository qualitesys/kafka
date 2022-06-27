console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java 337 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.Worker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.Worker" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Worker"
 , "c2" : "Worker(String;Time;Plugins;WorkerConfig;OffsetBackingStore;ConnectorClientConfigOverridePolicy)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Worker"
 , "c2" : "Worker(String;Time;Plugins;WorkerConfig;OffsetBackingStore;ExecutorService;ConnectorClientConfigOverridePolicy)"
 , "c3" : "1"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "WorkerConfigTransformer"
 , "c2" : "initConfigTransformer()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "WorkerConfigTransformer"
 , "c2" : "configTransformer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Herder"
 , "c2" : "herder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "5"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startConnector(String;Map<String,String>;CloseableConnectorContext;ConnectorStatus.Listener;TargetState;Callback<TargetState>)"
 , "c3" : "5"
 , "c4" : "35"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSinkConnector(String)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "List<Map<String,String>>"
 , "c2" : "connectorTaskConfigs(String;ConnectorConfig)"
 , "c3" : "5"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopConnector(String)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopConnectors(Collection<String>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "awaitStopConnector(String;long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "awaitStopConnectors(Collection<String>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopAndAwaitConnectors()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopAndAwaitConnectors(Collection<String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopAndAwaitConnector(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "connectorNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRunning(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "startSinkTask(ConnectorTaskId;ClusterConfigState;Map<String,String>;Map<String,String>;TaskStatus.Listener;TargetState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "startSourceTask(ConnectorTaskId;ClusterConfigState;Map<String,String>;Map<String,String>;TaskStatus.Listener;TargetState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "startExactlyOnceSourceTask(ConnectorTaskId;ClusterConfigState;Map<String,String>;Map<String,String>;TaskStatus.Listener;TargetState;Runnable;Runnable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "startTask(ConnectorTaskId;Map<String,String>;Map<String,String>;TaskStatus.Listener;TaskBuilder)"
 , "c3" : "10"
 , "c4" : "39"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "fenceZombies(String;int;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "fenceZombies(String;int;Map<String,String>;Function<Map<String,Object>,Admin>)"
 , "c3" : "2"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "exactlyOnceSourceTaskProducerConfigs(ConnectorTaskId;WorkerConfig;ConnectorConfig;Class<?extendsConnector>;ConnectorClientConfigOverridePolicy;String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "baseProducerConfigs(String;String;WorkerConfig;ConnectorConfig;Class<?extendsConnector>;ConnectorClientConfigOverridePolicy;String)"
 , "c3" : "1"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "exactlyOnceSourceOffsetsConsumerConfigs(String;String;WorkerConfig;ConnectorConfig;Class<?extendsConnector>;ConnectorClientConfigOverridePolicy;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "regularSourceOffsetsConsumerConfigs(String;String;WorkerConfig;ConnectorConfig;Class<?extendsConnector>;ConnectorClientConfigOverridePolicy;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "baseConsumerConfigs(String;String;WorkerConfig;ConnectorConfig;Class<?extendsConnector>;ConnectorClientConfigOverridePolicy;String;ConnectorType)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "adminConfigs(String;String;WorkerConfig;ConnectorConfig;Class<?extendsConnector>;ConnectorClientConfigOverridePolicy;String;ConnectorType)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "connectorClientConfigOverrides(String;ConnectorConfig;Class<?extendsConnector>;String;ConnectorType;ConnectorClientConfigRequest.ClientType;ConnectorClientConfigOverridePolicy)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "taskTransactionalId(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "taskTransactionalId(String;String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ErrorHandlingMetrics"
 , "c2" : "errorHandlingMetrics(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<ErrorReporter>"
 , "c2" : "sinkTaskReporters(ConnectorTaskId;SinkConnectorConfig;ErrorHandlingMetrics;Class<?extendsConnector>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "List<ErrorReporter>"
 , "c2" : "sourceTaskReporters(ConnectorTaskId;ConnectorConfig;ErrorHandlingMetrics)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "WorkerErrantRecordReporter"
 , "c2" : "createWorkerErrantRecordReporter(SinkConnectorConfig;RetryWithToleranceOperator;Converter;Converter;HeaderConverter)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopTask(ConnectorTaskId)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopTasks(Collection<ConnectorTaskId>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "awaitStopTask(ConnectorTaskId;long)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "awaitStopTasks(Collection<ConnectorTaskId>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopAndAwaitTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopAndAwaitTasks(Collection<ConnectorTaskId>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopAndAwaitTask(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<ConnectorTaskId>"
 , "c2" : "taskIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Converter"
 , "c2" : "getInternalKeyConverter()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Converter"
 , "c2" : "getInternalValueConverter()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Plugins"
 , "c2" : "getPlugins()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "workerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isTopicCreationEnabled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectMetrics"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setTargetState(String;TargetState;Callback<TargetState>)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "executeStateTransition(Runnable;ClassLoader)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorStatusMetricsGroup"
 , "c2" : "connectorStatusMetricsGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WorkerMetricsGroup"
 , "c2" : "workerMetricsGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "63"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "129"
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
 , "c4" : "52"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00080] The class Worker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument plugins is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument globalOffsetBackingStore is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.runtime.Worker.Worker@POLYN399626 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.runtime.Worker.Worker@POLYN399626 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.connect.runtime.Worker.Worker@POLYN399626 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00148] For method initConfigTransformer list of called methods Object monObjet|org.apache.kafka.connect.runtime.WorkerConfigTransformer config_getListN401511|org.apache.kafka.common.config.provider.ConfigProvider plugins_newConfigProviderN401808"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00152] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.connect.runtime.Worker.initConfigTransformer@POLYN401410 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.connect.runtime.Worker.start@POLYN402366 the MagicNumber/String  'Worker starting' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.connect.runtime.Worker.start@POLYN402366 the MagicNumber/String  'Worker started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String  'Worker stopping' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String  'Shutting down connectors {} uncleanly; herder should have shut down connectors before the Worker is stopped' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String  'Shutting down tasks {} uncleanly; herder should have shut down tasks before the Worker is stopped' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String  'Worker stopped' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String  'Executor did not terminate in time' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00231] For method startConnector arguments String  connName|Map&lt;String ,String &gt;  connProps|CloseableConnectorContext  ctx|ConnectorStatus.Listener  statusListener|TargetState  initialState|Callback&lt;TargetState &gt;  onConnectorStateChange"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#233"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00233] The argument connProps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#237"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00237] The argument onConnectorStateChange is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00289] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'Connector with name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  ' already exists' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'Creating connector {} of type {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'TODO' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'Instantiated connector {} with version {} of type {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'Failed to start connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'Connector with name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  ' already exists' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String  'Finished creating connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#309"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00309] For method isSinkConnector arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#309"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00309] For method isSinkConnector list of called methods Object monObjet|ClassLoader plugins_currentThreadLoaderN409824"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.connect.runtime.Worker.isSinkConnector@POLYN409456 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.connect.runtime.Worker.isSinkConnector@POLYN409456 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.connect.runtime.Worker.isSinkConnector@POLYN409456 the MagicNumber/String  ' not found in this worker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#324"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00324] For method connectorTaskConfigs arguments String  connName|ConnectorConfig  connConfig"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#324"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00324] The argument connConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00343] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String  'Reconfiguring connector tasks for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String  'Connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String  ' not found in this worker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#362"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00362] For method stopConnector arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800 the MagicNumber/String  'Stopping connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800 the MagicNumber/String  'Ignoring stop request for unowned connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#382"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00382] For method stopConnectors arguments Collection&lt;String &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#389"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00389] For method awaitStopConnector arguments String  connName|long  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'Ignoring await stop request for non-present connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'Connector '{}' failed to properly shut down, has become unresponsive, and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'may be consuming external resources. Correct the configuration for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'this connector or remove the connector. After fixing the connector, it ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'may be necessary to restart this worker to release any consumed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'resources.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String  'Graceful stop of connector {} succeeded.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#410"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00410] For method awaitStopConnectors arguments Collection&lt;String &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.connect.runtime.Worker.awaitStopConnectors@POLYN414846 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00425] For method stopAndAwaitConnectors arguments Collection&lt;String &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00431] For method stopAndAwaitConnector arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#442"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00442] For method isRunning arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.connect.runtime.Worker.isRunning@POLYN416711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method startSinkTask arguments ConnectorTaskId  id|ClusterConfigState  configState|Map&lt;String ,String &gt;  connProps|Map&lt;String ,String &gt;  taskProps|TaskStatus.Listener  statusListener|TargetState  initialState"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#461"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00461] For method startSourceTask arguments ConnectorTaskId  id|ClusterConfigState  configState|Map&lt;String ,String &gt;  connProps|Map&lt;String ,String &gt;  taskProps|TaskStatus.Listener  statusListener|TargetState  initialState"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#474"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00474] For method startExactlyOnceSourceTask arguments ConnectorTaskId  id|ClusterConfigState  configState|Map&lt;String ,String &gt;  connProps|Map&lt;String ,String &gt;  taskProps|TaskStatus.Listener  statusListener|TargetState  initialState|Runnable  preProducerCheck|Runnable  postProducerCheck"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#489"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00489] For method startTask arguments ConnectorTaskId  id|Map&lt;String ,String &gt;  connProps|Map&lt;String ,String &gt;  taskProps|TaskStatus.Listener  statusListener|TaskBuilder  taskBuilder"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#491"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00491] The argument connProps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#494"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00494] The argument taskBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Creating task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Task already exists in this worker: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Instantiated task {} with version {} of type {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Set up the key converter {} for task {} using the worker config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Set up the key converter {} for task {} using the connector config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Set up the value converter {} for task {} using the worker config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Set up the value converter {} for task {} using the connector config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Set up the header converter {} for task {} using the worker config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Set up the header converter {} for task {} using the connector config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Failed to start task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00568] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  'Task already exists in this worker: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#579"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00579] For method fenceZombies arguments String  connName|int  numTasks|Map&lt;String ,String &gt;  connProps"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#584"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00584] For method fenceZombies arguments String  connName|int  numTasks|Map&lt;String ,String &gt;  connProps|Function&lt;Map&lt;String ,Object &gt; ,Admin &gt;  adminFactory"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#584"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00584] The argument connProps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#584"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00584] The argument adminFactory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  'Fencing out {} task producers for source connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  'connector-worker-adminclient-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00606"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00613] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  'Finished fencing out {} task producers for source connector {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  'Zombie fencing admin for connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.connect.runtime.Worker.fenceZombies@POLYN426206 the MagicNumber/String  'Zombie fencing admin for connector ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#625"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00625] For method exactlyOnceSourceTaskProducerConfigs arguments ConnectorTaskId  id|WorkerConfig  config|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy|String  clusterId"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#625"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00625] For method exactlyOnceSourceTaskProducerConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; baseProducerConfigsN429304|String taskTransactionalIdN429739"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#625"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00625] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00626"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#626"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00626] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00631] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceTaskProducerConfigs@POLYN429018 the MagicNumber/String  'connector-producer-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceTaskProducerConfigs@POLYN429018 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00634"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#634"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00634] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceTaskProducerConfigs@POLYN429018 the MagicNumber/String  'for connectors when exactly-once source support is enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00635"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00635] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceTaskProducerConfigs@POLYN429018 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00640] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceTaskProducerConfigs@POLYN429018 the MagicNumber/String  'for connectors when exactly-once source support is enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceTaskProducerConfigs@POLYN429018 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00646] For method baseProducerConfigs arguments String  connName|String  defaultClientId|WorkerConfig  config|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy|String  clusterId"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00646] For method baseProducerConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; connectorClientConfigOverridesN431840"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#648"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00648] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.connect.runtime.Worker.baseProducerConfigs@POLYN430148 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArraySerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00656"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.connect.runtime.Worker.baseProducerConfigs@POLYN430148 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArraySerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00665"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.connect.runtime.Worker.baseProducerConfigs@POLYN430148 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.connect.runtime.Worker.baseProducerConfigs@POLYN430148 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00667"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00667] In method org.apache.kafka.connect.runtime.Worker.baseProducerConfigs@POLYN430148 the MagicNumber/String  '1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.connect.runtime.Worker.baseProducerConfigs@POLYN430148 the MagicNumber/String  'producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#685"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00685] For method exactlyOnceSourceOffsetsConsumerConfigs arguments String  connName|String  defaultClientId|WorkerConfig  config|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy|String  clusterId"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#685"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00685] For method exactlyOnceSourceOffsetsConsumerConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; baseConsumerConfigsN432520"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceOffsetsConsumerConfigs@POLYN432209 the MagicNumber/String  'for source connectors' offset consumers when exactly-once source support is enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00698] In method org.apache.kafka.connect.runtime.Worker.exactlyOnceSourceOffsetsConsumerConfigs@POLYN432209 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#703"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00703] For method regularSourceOffsetsConsumerConfigs arguments String  connName|String  defaultClientId|WorkerConfig  config|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy|String  clusterId"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#703"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00703] For method regularSourceOffsetsConsumerConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; baseConsumerConfigsN433373"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#720"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00720] For method baseConsumerConfigs arguments String  connName|String  defaultClientId|WorkerConfig  config|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy|String  clusterId|ConnectorType  connectorType"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#720"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00720] For method baseConsumerConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; connectorClientConfigOverridesN435303"
}} 
,
{ "ligne" : {
   "c1" : "00722"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#722"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00722] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.connect.runtime.Worker.baseConsumerConfigs@POLYN433845 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00736"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#736"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00736] In method org.apache.kafka.connect.runtime.Worker.baseConsumerConfigs@POLYN433845 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00737] In method org.apache.kafka.connect.runtime.Worker.baseConsumerConfigs@POLYN433845 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArrayDeserializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#738"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00738] In method org.apache.kafka.connect.runtime.Worker.baseConsumerConfigs@POLYN433845 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArrayDeserializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00740"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#740"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00740] In method org.apache.kafka.connect.runtime.Worker.baseConsumerConfigs@POLYN433845 the MagicNumber/String  'consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#753"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00753] For method adminConfigs arguments String  connName|String  defaultClientId|WorkerConfig  config|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy|String  clusterId|ConnectorType  connectorType"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#753"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00753] For method adminConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; config_originalsN436121|java.util.Map&lt;String,Object&gt; connectorClientConfigOverridesN437137"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#755"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00755] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00768"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#768"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00768] In method org.apache.kafka.connect.runtime.Worker.adminConfigs@POLYN435664 the MagicNumber/String  'admin.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00769"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#769"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00769] In method org.apache.kafka.connect.runtime.Worker.adminConfigs@POLYN435664 the MagicNumber/String  'producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00770] In method org.apache.kafka.connect.runtime.Worker.adminConfigs@POLYN435664 the MagicNumber/String  'consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00777"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00777] In method org.apache.kafka.connect.runtime.Worker.adminConfigs@POLYN435664 the MagicNumber/String  'admin.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#792"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00792] For method connectorClientConfigOverrides arguments String  connName|ConnectorConfig  connConfig|Class&lt;?  extends Connector &gt;  connectorClass|String  clientConfigPrefix|ConnectorType  connectorType|ConnectorClientConfigRequest.ClientType  clientType|ConnectorClientConfigOverridePolicy  connectorClientConfigOverridePolicy"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#792"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00792] For method connectorClientConfigOverrides list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; connConfig_originalsWithPrefixN437937|java.util.List&lt;org.apache.kafka.common.config.ConfigValue&gt; connectorClientConfigOverridePolicy_validateN438233"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#793"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00793] The argument connConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00798"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#798"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00798] The argument connectorClientConfigOverridePolicy is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00809"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#809"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00809] In method org.apache.kafka.connect.runtime.Worker.connectorClientConfigOverrides@POLYN437618 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00811"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#811"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00811] In method org.apache.kafka.connect.runtime.Worker.connectorClientConfigOverrides@POLYN437618 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.connect.runtime.Worker.connectorClientConfigOverrides@POLYN437618 the MagicNumber/String  'Client Config Overrides not allowed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#817"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00817] For method taskTransactionalId arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#817"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00817] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00822"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#822"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00822] For method taskTransactionalId arguments String  groupId|String  connector|int  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00823"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.connect.runtime.Worker.taskTransactionalId@POLYN439267 the MagicNumber/String  '%s-%s-%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00826"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#826"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00826] For method errorHandlingMetrics arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#830"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00830] For method sinkTaskReporters arguments ConnectorTaskId  id|SinkConnectorConfig  connConfig|ErrorHandlingMetrics  errorHandlingMetrics|Class&lt;?  extends Connector &gt;  connectorClass"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#830"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00830] For method sinkTaskReporters list of called methods Object monObjet|String connConfig_dlqTopicNameN440228|java.util.Map&lt;String,Object&gt; baseProducerConfigsN440464|java.util.Map&lt;String,Object&gt; adminConfigsN440763|org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter DeadLetterQueueReporter_createAndSetupN441033"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#830"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00830] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#830"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00830] The argument connConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00839"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#839"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00839] In method org.apache.kafka.connect.runtime.Worker.sinkTaskReporters@POLYN439716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00840"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#840"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00840] In method org.apache.kafka.connect.runtime.Worker.sinkTaskReporters@POLYN439716 the MagicNumber/String  'connector-dlq-producer-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.connect.runtime.Worker.sinkTaskReporters@POLYN439716 the MagicNumber/String  'connector-dlq-adminclient-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00851"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#851"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00851] For method sourceTaskReporters arguments ConnectorTaskId  id|ConnectorConfig  connConfig|ErrorHandlingMetrics  errorHandlingMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00860"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#860"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00860] For method createWorkerErrantRecordReporter arguments SinkConnectorConfig  connConfig|RetryWithToleranceOperator  retryWithToleranceOperator|Converter  keyConverter|Converter  valueConverter|HeaderConverter  headerConverter"
}} 
,
{ "ligne" : {
   "c1" : "00861"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#861"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00861] The argument connConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00871"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#871"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00871] In method org.apache.kafka.connect.runtime.Worker.createWorkerErrantRecordReporter@POLYN441792 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#874"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00874] For method stopTask arguments ConnectorTaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00877] In method org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00878] In method org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203 the MagicNumber/String  'Ignoring stop request for unowned task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203 the MagicNumber/String  'Stopping task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00896"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#896"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00896] For method stopTasks arguments Collection&lt;ConnectorTaskId &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#904"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00904] For method awaitStopTask arguments ConnectorTaskId  taskId|long  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00907"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#907"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00907] In method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00908"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#908"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00908] In method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String  'Ignoring await stop request for non-present task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00913"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#913"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00913] In method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String  'Graceful stop of task {} failed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String  'Graceful stop of task {} succeeded.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00927] For method awaitStopTasks arguments Collection&lt;ConnectorTaskId &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00931] In method org.apache.kafka.connect.runtime.Worker.awaitStopTasks@POLYN444596 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#942"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00942] For method stopAndAwaitTasks arguments Collection&lt;ConnectorTaskId &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00948"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#948"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00948] For method stopAndAwaitTask arguments ConnectorTaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#984"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00984] For method setTargetState arguments String  connName|TargetState  state|Callback&lt;TargetState &gt;  stateChangeCallback"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#984"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00984] For method setTargetState list of called methods Object monObjet|org.apache.kafka.connect.runtime.isolation.DelegatingClassLoader plugins_delegatingLoaderN447528"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00998] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.connect.runtime.Worker.setTargetState@POLYN447080 the MagicNumber/String  'Setting connector {} state to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00988"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#988"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00988] In method org.apache.kafka.connect.runtime.Worker.setTargetState@POLYN447080 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1004"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01004] For method executeStateTransition arguments Runnable  stateTransition|ClassLoader  loader"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1004"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01004] For method executeStateTransition list of called methods Object monObjet|ClassLoader plugins_currentThreadLoaderN448437"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1004"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01004] The argument stateTransition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01008"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[01008] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01022] The class TaskBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1046"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01046] For method withTask arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1051"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01051] For method withConnectorConfig arguments ConnectorConfig  connectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1056"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01056] For method withKeyConverter arguments Converter  keyConverter"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1061"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01061] For method withValueConverter arguments Converter  valueConverter"
}} 
,
{ "ligne" : {
   "c1" : "01066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1066"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01066] For method withHeaderConverter arguments HeaderConverter  headerConverter"
}} 
,
{ "ligne" : {
   "c1" : "01071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1071"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01071] For method withClassloader arguments ClassLoader  classLoader"
}} 
,
{ "ligne" : {
   "c1" : "01076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1076"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01076] For method build list of called methods Object monObjet|org.apache.kafka.connect.runtime.errors.ErrorHandlingMetrics errorHandlingMetricsN451596|Class&lt;? extends Connector&gt; plugins_connectorClassN451714"
}} 
,
{ "ligne" : {
   "c1" : "01077"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1077"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01077] In method org.apache.kafka.connect.runtime.Worker.TaskBuilder.build@POLYN450951 the MagicNumber/String  'Task cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1078"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01078] In method org.apache.kafka.connect.runtime.Worker.TaskBuilder.build@POLYN450951 the MagicNumber/String  'Connector config used by task cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1079"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01079] In method org.apache.kafka.connect.runtime.Worker.TaskBuilder.build@POLYN450951 the MagicNumber/String  'Key converter used by task cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1080"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01080] In method org.apache.kafka.connect.runtime.Worker.TaskBuilder.build@POLYN450951 the MagicNumber/String  'Value converter used by task cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1081"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01081] In method org.apache.kafka.connect.runtime.Worker.TaskBuilder.build@POLYN450951 the MagicNumber/String  'Header converter used by task cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1082"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01082] In method org.apache.kafka.connect.runtime.Worker.TaskBuilder.build@POLYN450951 the MagicNumber/String  'Classloader used by task cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1096"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01096] For method doBuild arguments Task  task|ConnectorTaskId  id|ClusterConfigState  configState|TaskStatus.Listener  statusListener|TargetState  initialState|ConnectorConfig  connectorConfig|Converter  keyConverter|Converter  valueConverter|HeaderConverter  headerConverter|ClassLoader  classLoader|ErrorHandlingMetrics  errorHandlingMetrics|Class&lt;?  extends Connector &gt;  connectorClass|RetryWithToleranceOperator  retryWithToleranceOperator"
}} 
,
{ "ligne" : {
   "c1" : "01046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01046] Public method withTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1051"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01051] Public method withConnectorConfig is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1056"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01056] Public method withKeyConverter is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01061] Public method withValueConverter is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01066] Public method withHeaderConverter is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01071] Public method withClassloader is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01121] For method doBuild arguments Task  task|ConnectorTaskId  id|ClusterConfigState  configState|TaskStatus.Listener  statusListener|TargetState  initialState|ConnectorConfig  connectorConfig|Converter  keyConverter|Converter  valueConverter|HeaderConverter  headerConverter|ClassLoader  classLoader|ErrorHandlingMetrics  errorHandlingMetrics|Class&lt;?  extends Connector &gt;  connectorClass|RetryWithToleranceOperator  retryWithToleranceOperator"
}} 
,
{ "ligne" : {
   "c1" : "01121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01121] For method doBuild list of called methods Object monObjet|org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter createWorkerErrantRecordReporterN454207|java.util.Map&lt;String,Object&gt; baseConsumerConfigsN454418"
}} 
,
{ "ligne" : {
   "c1" : "01122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01122] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01126] The argument connectorConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01133] The argument retryWithToleranceOperator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.connect.runtime.Worker.SinkTaskBuilder.doBuild@POLYN453186 the MagicNumber/String  'Initializing: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01143] In method org.apache.kafka.connect.runtime.Worker.SinkTaskBuilder.doBuild@POLYN453186 the MagicNumber/String  'connector-consumer-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01162] For method doBuild arguments Task  task|ConnectorTaskId  id|ClusterConfigState  configState|TaskStatus.Listener  statusListener|TargetState  initialState|ConnectorConfig  connectorConfig|Converter  keyConverter|Converter  valueConverter|HeaderConverter  headerConverter|ClassLoader  classLoader|ErrorHandlingMetrics  errorHandlingMetrics|Class&lt;?  extends Connector &gt;  connectorClass|RetryWithToleranceOperator  retryWithToleranceOperator"
}} 
,
{ "ligne" : {
   "c1" : "01162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01162] For method doBuild list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; baseProducerConfigsN456706|java.util.Map&lt;String,org.apache.kafka.connect.util.TopicCreationGroup&gt; TopicCreationGroup_configuredGroupsN457325|java.util.Map&lt;String,Object&gt; adminConfigsN457456"
}} 
,
{ "ligne" : {
   "c1" : "01163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01163] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01167"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01167] The argument connectorConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01174"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1174"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01174] The argument retryWithToleranceOperator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01180] In method org.apache.kafka.connect.runtime.Worker.SourceTaskBuilder.doBuild@POLYN455628 the MagicNumber/String  'Initializing: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01182] In method org.apache.kafka.connect.runtime.Worker.SourceTaskBuilder.doBuild@POLYN455628 the MagicNumber/String  'connector-producer-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01191"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01191] In method org.apache.kafka.connect.runtime.Worker.SourceTaskBuilder.doBuild@POLYN455628 the MagicNumber/String  'connector-adminclient-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01195"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01195] In method org.apache.kafka.connect.runtime.Worker.SourceTaskBuilder.doBuild@POLYN455628 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01196] In method org.apache.kafka.connect.runtime.Worker.SourceTaskBuilder.doBuild@POLYN455628 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01201"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01201] In method org.apache.kafka.connect.runtime.Worker.SourceTaskBuilder.doBuild@POLYN455628 the MagicNumber/String  'TODO' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01231] For method doBuild arguments Task  task|ConnectorTaskId  id|ClusterConfigState  configState|TaskStatus.Listener  statusListener|TargetState  initialState|ConnectorConfig  connectorConfig|Converter  keyConverter|Converter  valueConverter|HeaderConverter  headerConverter|ClassLoader  classLoader|ErrorHandlingMetrics  errorHandlingMetrics|Class&lt;?  extends Connector &gt;  connectorClass|RetryWithToleranceOperator  retryWithToleranceOperator"
}} 
,
{ "ligne" : {
   "c1" : "01231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01231] For method doBuild list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; exactlyOnceSourceTaskProducerConfigsN460742|java.util.Map&lt;String,Object&gt; adminConfigsN461127|java.util.Map&lt;String,org.apache.kafka.connect.util.TopicCreationGroup&gt; TopicCreationGroup_configuredGroupsN461688"
}} 
,
{ "ligne" : {
   "c1" : "01232"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1232"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01232] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1236"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01236] The argument connectorConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1243"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01243] The argument retryWithToleranceOperator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01249"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01249] In method org.apache.kafka.connect.runtime.Worker.ExactlyOnceSourceTaskBuilder.doBuild@POLYN459664 the MagicNumber/String  'Initializing: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01257] In method org.apache.kafka.connect.runtime.Worker.ExactlyOnceSourceTaskBuilder.doBuild@POLYN459664 the MagicNumber/String  'connector-adminclient-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01265] In method org.apache.kafka.connect.runtime.Worker.ExactlyOnceSourceTaskBuilder.doBuild@POLYN459664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01270] In method org.apache.kafka.connect.runtime.Worker.ExactlyOnceSourceTaskBuilder.doBuild@POLYN459664 the MagicNumber/String  'TODO' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01284"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01284] The class ConnectorStatusMetricsGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1293"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01293] The argument connectMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01300"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01300] For method taskCounter arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "01307"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01307] For method taskStatusCounter arguments String  connName|TaskStatus.State  state"
}} 
,
{ "ligne" : {
   "c1" : "01307"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1307"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01307] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01311"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01311] The same method call herder.taskStatus(task.id())state.toString() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1316"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01316] Lock statement on synchronized method recordTaskAdded"
}} 
,
{ "ligne" : {
   "c1" : "01316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1316"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01316] For method recordTaskAdded arguments ConnectorTaskId  connectorTaskId"
}} 
,
{ "ligne" : {
   "c1" : "01316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1316"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01316] The argument connectorTaskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01335"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1335"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01335] Lock statement on synchronized method recordTaskRemoved"
}} 
,
{ "ligne" : {
   "c1" : "01335"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01335] For method recordTaskRemoved arguments ConnectorTaskId  connectorTaskId"
}} 
,
{ "ligne" : {
   "c1" : "01335"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1335"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01335] The argument connectorTaskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01343"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1343"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01343] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {
   "c1" : "01349"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1349"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01349] For method metricGroup arguments String  connectorId"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00437] Public method connectorNames is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00442] Public method isRunning is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00448] Public method startSinkTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00461] Public method startSourceTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#474"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00474] Public method startExactlyOnceSourceTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#579"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00579] Public method fenceZombies is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00822"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#822"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00822] Public method taskTransactionalId is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00954] Public method taskIds is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00420] Public method stopAndAwaitConnectors is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00425] Public method stopAndAwaitConnectors is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00431] Public method stopAndAwaitConnector is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00937"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00937] Public method stopAndAwaitTasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00942] Public method stopAndAwaitTasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00948"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00948] Public method stopAndAwaitTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.stop@POLYN402985"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.isTopicCreationEnabled@POLYN446789"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.setTargetState@POLYN447080"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.start@POLYN402366"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00877] In the recursive method org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00878] In the recursive method org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203 the MagicNumber/String 'Ignoring stop request for unowned task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#882"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00882] In the recursive method org.apache.kafka.connect.runtime.Worker.stopTask@POLYN442203 the MagicNumber/String 'Stopping task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String 'Worker stopping' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00193] In the recursive method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String 'Shutting down connectors {} uncleanly; herder should have shut down connectors before the Worker is stopped' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String 'Shutting down tasks {} uncleanly; herder should have shut down tasks before the Worker is stopped' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00208] In the recursive method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String 'Worker stopped' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00221] In the recursive method org.apache.kafka.connect.runtime.Worker.stop@POLYN402985 the MagicNumber/String 'Executor did not terminate in time' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00907"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00907] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00908"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00908] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String 'Ignoring await stop request for non-present task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00913"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00913] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String 'Graceful stop of task {} failed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00916] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN443553 the MagicNumber/String 'Graceful stop of task {} succeeded.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00365] In the recursive method org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800 the MagicNumber/String 'Stopping connector {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00367] In the recursive method org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00368] In the recursive method org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN412800 the MagicNumber/String 'Ignoring stop request for unowned connector {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00392] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'Ignoring await stop request for non-present connector {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00398] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'Connector '{}' failed to properly shut down, has become unresponsive, and ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00399] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'may be consuming external resources. Correct the configuration for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00400] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'this connector or remove the connector. After fixing the connector, it ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00401] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'may be necessary to restart this worker to release any consumed ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'resources.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#405"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00405] In the recursive method org.apache.kafka.connect.runtime.Worker.awaitStopConnector@POLYN413906 the MagicNumber/String 'Graceful stop of connector {} succeeded.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Creating task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00502] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Task already exists in this worker: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00514] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Instantiated task {} with version {} of type {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00525] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#527"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00527] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Set up the key converter {} for task {} using the worker config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00529] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Set up the key converter {} for task {} using the connector config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00531] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00533] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Set up the value converter {} for task {} using the worker config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00535] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Set up the value converter {} for task {} using the connector config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00537] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00540] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Set up the header converter {} for task {} using the worker config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00542] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Set up the header converter {} for task {} using the connector config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00557] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Failed to start task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00563] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00567] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00568] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String 'Task already exists in this worker: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00574] In the recursive method org.apache.kafka.connect.runtime.Worker.startTask@POLYN420090 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#327"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00327] In the recursive method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String 'Reconfiguring connector tasks for {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00330] In the recursive method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String ' not found in this worker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN410336 the MagicNumber/String 'Connector ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#985"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00985] In the recursive method org.apache.kafka.connect.runtime.Worker.setTargetState@POLYN447080 the MagicNumber/String 'Setting connector {} state to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00988"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#988"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00988] In the recursive method org.apache.kafka.connect.runtime.Worker.setTargetState@POLYN447080 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method org.apache.kafka.connect.runtime.Worker.start@POLYN402366 the MagicNumber/String 'Worker starting' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00182] In the recursive method org.apache.kafka.connect.runtime.Worker.start@POLYN402366 the MagicNumber/String 'Worker started' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String ' already exists' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'Connector with name ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00244] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00258] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'Creating connector {} of type {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'TODO' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'Instantiated connector {} with version {} of type {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00283] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'Failed to start connector {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00295] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String ' already exists' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00295] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'Connector with name ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Worker.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.connect.runtime.Worker.startConnector@POLYN405227 the MagicNumber/String 'Finished creating connector {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
