console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java 73 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "OffsetBackingStore"
 , "c2" : "org.apache.kafka.connect.storage.KafkaOffsetBackingStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.KafkaOffsetBackingStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaOffsetBackingStore"
 , "c2" : "KafkaOffsetBackingStore()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaOffsetBackingStore"
 , "c2" : "KafkaOffsetBackingStore(Supplier<TopicAdmin>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(WorkerConfig)"
 , "c3" : "4"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : "KafkaBasedLog<byte[],byte[]>"
 , "c2" : "createKafkaBasedLog(String;Map<String,Object>;Map<String,Object>;Callback<ConsumerRecord<byte[],byte[]>>;NewTopic;Supplier<TopicAdmin>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Future<Map<ByteBuffer,ByteBuffer>>"
 , "c2" : "get(Collection<ByteBuffer>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Future<Void>"
 , "c2" : "set(Map<ByteBuffer,ByteBuffer>;Callback<Void>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.svg" }

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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
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
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00039] The class KafkaOffsetBackingStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.KafkaOffsetBackingStore@POLYN187253 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method configure arguments WorkerConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00057] For method configure list of called methods Object monObjet|String ConnectUtils_lookupKafkaClusterIdN187973|java.util.Map&lt;String,Object&gt; config_originalsN188187|org.apache.kafka.connect.util.TopicAdmin.NewTopicBuilder TopicAdmin_defineTopicN190341|KafkaBasedLog&lt;byte[],byte[]&gt; createKafkaBasedLogN190685"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String  'Offset storage topic must be specified' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method createKafkaBasedLog arguments String  topic|Map&lt;String ,Object &gt;  producerProps|Map&lt;String ,Object &gt;  consumerProps|Callback&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  consumedCallback|NewTopic  topicDescription|Supplier&lt;TopicAdmin &gt;  adminSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00106] For method createKafkaBasedLog list of called methods Object monObjet|KafkaBasedLog&lt;byte[],byte[]&gt; admin_createTopicsN191503"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908 the MagicNumber/String  'Creating admin client to manage Connect internal offset topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908 the MagicNumber/String  'Using admin client to check cleanup policy for '{}' topic is '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908 the MagicNumber/String  'source connector offsets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.start@POLYN192158 the MagicNumber/String  'Starting KafkaOffsetBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.start@POLYN192158 the MagicNumber/String  'Finished reading offsets topic and starting KafkaOffsetBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411 the MagicNumber/String  'Stopping KafkaOffsetBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411 the MagicNumber/String  'Stopped KafkaOffsetBackingStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method get arguments Collection&lt;ByteBuffer &gt;  keys"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method set arguments Map&lt;ByteBuffer ,ByteBuffer &gt;  values|Callback&lt;Void &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument values is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00168] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00169] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.set@POLYN193829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.set@POLYN193829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.set@POLYN193829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.set@POLYN193829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00185] The class SetCallbackFuture contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#197"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00197] Lock statement on synchronized method onCompletion"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.onCompletion@POLYN196239 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#217"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00217] Lock statement on synchronized method cancel"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#217"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00217] For method cancel arguments boolean  mayInterruptIfRunning"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.cancel@POLYN197105 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#222"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00222] Lock statement on synchronized method isCancelled"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.isCancelled@POLYN197234 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#227"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00227] Lock statement on synchronized method isDone"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#232"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00232] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.get@POLYN197446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.get@POLYN197446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#242"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00242] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method get arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#242"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00242] The argument unit is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.get@POLYN197815 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.get@POLYN197815 the MagicNumber/String  'KafkaOffsetBackingStore Future timed out.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.get@POLYN197815 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.SetCallbackFuture.get@POLYN197815 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaOffsetBackingStore.start@POLYN192158"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String 'Offset storage topic must be specified' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String 'false' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.configure@POLYN187558 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908 the MagicNumber/String 'Creating admin client to manage Connect internal offset topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908 the MagicNumber/String 'Using admin client to check cleanup policy for '{}' topic is '{}'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.createKafkaBasedLog@POLYN190908 the MagicNumber/String 'source connector offsets' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.start@POLYN192158 the MagicNumber/String 'Starting KafkaOffsetBackingStore' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.start@POLYN192158 the MagicNumber/String 'Finished reading offsets topic and starting KafkaOffsetBackingStore' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411 the MagicNumber/String 'Stopping KafkaOffsetBackingStore' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/KafkaOffsetBackingStore.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.connect.storage.KafkaOffsetBackingStore.stop@POLYN192411 the MagicNumber/String 'Stopped KafkaOffsetBackingStore' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
