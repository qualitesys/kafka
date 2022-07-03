console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java 55 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConfigBackingStore"
 , "c2" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MemoryConfigBackingStore"
 , "c2" : "MemoryConfigBackingStore()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "MemoryConfigBackingStore"
 , "c2" : "MemoryConfigBackingStore(WorkerConfigTransformer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "ClusterConfigState"
 , "c2" : "snapshot()"
 , "c3" : "2"
 , "c4" : "11"
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
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeConnectorConfig(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeTaskConfigs(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTaskConfigs(String;List<Map<String,String>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "refresh(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTargetState(String;TargetState)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putSessionKey(SessionKey)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putRestartRequest(RestartRequest)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putTaskCountRecord(String;int)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setUpdateListener(UpdateListener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<ConnectorTaskId,Map<String,String>>"
 , "c2" : "taskConfigListAsMap(String;List<Map<String,String>>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "6"
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
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class MemoryConfigBackingStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#32"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00032] Lock statement on synchronized method start"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#36"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00036] Lock statement on synchronized method stop"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#40"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00040] Lock statement on synchronized method snapshot"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.snapshot@POLYN186162 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#71"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00071] Lock statement on synchronized method contains"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method contains arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#76"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00076] Lock statement on synchronized method putConnectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method putConnectorConfig arguments String  connector|Map&lt;String ,String &gt;  properties"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN188025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN188025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#88"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00088] Lock statement on synchronized method removeConnectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method removeConnectorConfig arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN188644 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN188644 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#96"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00096] Lock statement on synchronized method removeTaskConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method removeTaskConfigs arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN188995 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN188995 the MagicNumber/String  'Cannot remove tasks for non-existing connector' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN188995 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#109"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00109] Lock statement on synchronized method putTaskConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method putTaskConfigs arguments String  connector|List&lt;Map&lt;String ,String &gt; &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00109] For method putTaskConfigs list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.connect.util.ConnectorTaskId,Map&lt;String,String&gt;&gt; taskConfigListAsMapN190118"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN189643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN189643 the MagicNumber/String  'Cannot put tasks for non-existing connector' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN189643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method refresh arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#126"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00126] Lock statement on synchronized method putTargetState"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method putTargetState arguments String  connector|TargetState  state"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN190528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN190528 the MagicNumber/String  'No connector `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN190528 the MagicNumber/String  '` configured' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN190528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method putSessionKey arguments SessionKey  sessionKey"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method putRestartRequest arguments RestartRequest  restartRequest"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method putTaskCountRecord arguments String  connector|int  taskCount"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#153"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00153] Lock statement on synchronized method setUpdateListener"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method setUpdateListener arguments UpdateListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00157] The class ConnectorState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method taskConfigListAsMap arguments String  connector|List&lt;Map&lt;String ,String &gt; &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.storage.MemoryConfigBackingStore.taskConfigListAsMap@POLYN192164 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00032] Void method start is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00032] Void method start is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00036] Void method stop is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00036] Void method stop is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00122] Void method refresh is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00122] Void method refresh is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00138] Void method putSessionKey is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00138] Void method putSessionKey is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00143] Void method putRestartRequest is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00143] Void method putRestartRequest is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00148] Void method putTaskCountRecord is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryConfigBackingStore.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00148] Void method putTaskCountRecord is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
