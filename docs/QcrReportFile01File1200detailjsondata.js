console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java 86 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.util.KafkaBasedLog"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.KafkaBasedLog" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "KafkaBasedLog"
 , "c2" : "KafkaBasedLog(String;Map<String,Object>;Map<String,Object>;Callback<ConsumerRecord<K,V>>;Time;Runnable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaBasedLog"
 , "c2" : "KafkaBasedLog(String;Map<String,Object>;Map<String,Object>;Supplier<TopicAdmin>;Callback<ConsumerRecord<K,V>>;Time;java.util.function.Consumer<TopicAdmin>)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "start()"
 , "c3" : "6"
 , "c4" : "24"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "readToEnd(Callback<Void>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Future<Void>"
 , "c2" : "readToEnd()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "send(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "send(K;V;org.apache.kafka.clients.producer.Callback)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "partitionCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Producer<K,V>"
 , "c2" : "createProducer()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Consumer<K,V>"
 , "c2" : "createConsumer()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "poll(long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "readToLogEnd(boolean)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "readEndOffsets(Set<TopicPartition>;boolean)"
 , "c3" : "4"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "59"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00045] The class KafkaBasedLog contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00079] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN235796 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN235796 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN235796 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument consumerConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN237225 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN237225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  'Starting KafkaBasedLog with topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  'Must provide a TopicAdmin to KafkaBasedLog when consumer is configured with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  ' set to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  'Creating read-only KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  'Could not look up partition metadata for offset backing store topic in' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  ' allotted period. This could indicate a connectivity issue, unavailable topic partitions, or if' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  ' this is your first use of the topic it may have taken too long to create.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  'Finished reading KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN240432 the MagicNumber/String  'Started KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#195"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00195] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  'Stopping KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  'Failed to stop KafkaBasedLog. Exiting without cleanly shutting ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  'down it's producer and consumer.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  'KafkaBasedLog producer for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  'KafkaBasedLog consumer for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN243178 the MagicNumber/String  'Stopped KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method readToEnd arguments Callback&lt;Void &gt;  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#224"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00224] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.connect.util.KafkaBasedLog.readToEnd@POLYN244842 the MagicNumber/String  'Starting read to end log for topic {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.connect.util.KafkaBasedLog.readToEnd@POLYN245571 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method send arguments K  key|V  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.util.KafkaBasedLog.send@POLYN245838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method send arguments K  key|V  value|org.apache.kafka.clients.producer.Callback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.connect.util.KafkaBasedLog.send@POLYN246035 the MagicNumber/String  'This KafkaBasedLog was created in read-only mode and does not support write operations' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.connect.util.KafkaBasedLog.createProducer@POLYN246612 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.connect.util.KafkaBasedLog.createProducer@POLYN246612 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.connect.util.KafkaBasedLog.createConsumer@POLYN246989 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.connect.util.KafkaBasedLog.createConsumer@POLYN246989 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method poll arguments long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.connect.util.KafkaBasedLog.poll@POLYN247321 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.util.KafkaBasedLog.poll@POLYN247321 the MagicNumber/String  'Error polling: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00288] For method readToLogEnd arguments boolean  shouldRetry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00294] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00296] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00296] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.connect.util.KafkaBasedLog.readToLogEnd@POLYN248217 the MagicNumber/String  'Reading to end of log offsets {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.connect.util.KafkaBasedLog.readToLogEnd@POLYN248217 the MagicNumber/String  'Read to end offset {} for {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.connect.util.KafkaBasedLog.readToLogEnd@POLYN248217 the MagicNumber/String  'Behind end offset {} for {}; last-read offset is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method readEndOffsets arguments Set&lt;TopicPartition &gt;  assignment|boolean  shouldRetry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN250137 the MagicNumber/String  'Reading to end of offset log' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN250137 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN250137 the MagicNumber/String  'Reading to end of log offsets with consumer since admin client is unsupported: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN250137 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.WorkThread@POLYN251088 the MagicNumber/String  'KafkaBasedLog Work Thread - ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00377] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00385] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00396] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00403] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#367"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00367] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#392"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00392] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00396] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  '{} started execution' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00373"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  'Finished read to end log for topic {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  'Timeout while reading log to end for topic '{}'. Retrying automatically. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  'This may occur when brokers are unavailable or unreachable. Reason: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  'Retriable error while reading log to end for topic '{}'. Retrying automatically. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  'Reason: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN251228 the MagicNumber/String  'Unexpected exception in {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00236] Public method readToEnd is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00242] Public method send is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
