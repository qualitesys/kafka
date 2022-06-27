console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java 78 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.util.KafkaBasedLog"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.KafkaBasedLog" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaBasedLog"
 , "c2" : "KafkaBasedLog(String;Map<String,Object>;Map<String,Object>;Callback<ConsumerRecord<K,V>>;Time;Runnable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaBasedLog"
 , "c2" : "KafkaBasedLog(String;Map<String,Object>;Map<String,Object>;Supplier<TopicAdmin>;Callback<ConsumerRecord<K,V>>;Time;java.util.function.Consumer<TopicAdmin>)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "4"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "readToEnd(Callback<Void>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Future<Void>"
 , "c2" : "readToEnd()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "send(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "send(K;V;org.apache.kafka.clients.producer.Callback)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partitionCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Producer<K,V>"
 , "c2" : "createProducer()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Consumer<K,V>"
 , "c2" : "createConsumer()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "poll(long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "readToLogEnd(boolean)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "readEndOffsets(Set<TopicPartition>;boolean)"
 , "c3" : "3"
 , "c4" : "6"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
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
 , "c4" : "52"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
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
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class KafkaBasedLog contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00073] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN235871 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN235871 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN235871 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN237300 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.util.KafkaBasedLog.KafkaBasedLog@POLYN237300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  'Starting KafkaBasedLog with topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  'Could not look up partition metadata for offset backing store topic in' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  ' allotted period. This could indicate a connectivity issue, unavailable topic partitions, or if' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  ' this is your first use of the topic it may have taken too long to create.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  'Finished reading KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.util.KafkaBasedLog.start@POLYN238454 the MagicNumber/String  'Started KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#144"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00144] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  'Stopping KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  'Failed to stop KafkaBasedLog. Exiting without cleanly shutting ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  'down it's producer and consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  'Failed to stop KafkaBasedLog producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  'Failed to stop KafkaBasedLog consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.connect.util.KafkaBasedLog.stop@POLYN240681 the MagicNumber/String  'Stopped KafkaBasedLog for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method readToEnd arguments Callback&lt;Void &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#178"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00178] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.connect.util.KafkaBasedLog.readToEnd@POLYN242327 the MagicNumber/String  'Starting read to end log for topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.connect.util.KafkaBasedLog.readToEnd@POLYN243033 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method send arguments K  key|V  value"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.util.KafkaBasedLog.send@POLYN243300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method send arguments K  key|V  value|org.apache.kafka.clients.producer.Callback  callback"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.connect.util.KafkaBasedLog.createProducer@POLYN243966 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.connect.util.KafkaBasedLog.createProducer@POLYN243966 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.connect.util.KafkaBasedLog.createConsumer@POLYN244343 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.connect.util.KafkaBasedLog.createConsumer@POLYN244343 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method poll arguments long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.connect.util.KafkaBasedLog.poll@POLYN244675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.connect.util.KafkaBasedLog.poll@POLYN244675 the MagicNumber/String  'Error polling: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method readToLogEnd arguments boolean  shouldRetry"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00246] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00248] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00249] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00248] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00249] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.util.KafkaBasedLog.readToLogEnd@POLYN245571 the MagicNumber/String  'Reading to end of log offsets {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.connect.util.KafkaBasedLog.readToLogEnd@POLYN245571 the MagicNumber/String  'Read to end offset {} for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.connect.util.KafkaBasedLog.readToLogEnd@POLYN245571 the MagicNumber/String  'Behind end offset {} for {}; last-read offset is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#266"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00266] For method readEndOffsets arguments Set&lt;TopicPartition &gt;  assignment|boolean  shouldRetry"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN247174 the MagicNumber/String  'Reading to end of offset log' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN247174 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN247174 the MagicNumber/String  'Reading to end of log offsets with consumer since admin client is unsupported: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.connect.util.KafkaBasedLog.readEndOffsets@POLYN247174 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.WorkThread@POLYN248028 the MagicNumber/String  'KafkaBasedLog Work Thread - ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00324] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00328] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00328] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00332] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00343] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00350] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#314"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00314] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#339"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00339] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00343] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  '{} started execution' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  'Finished read to end log for topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  'Timeout while reading log to end for topic '{}'. Retrying automatically. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  'This may occur when brokers are unavailable or unreachable. Reason: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  'Retriable error while reading log to end for topic '{}'. Retrying automatically. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  'Reason: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.connect.util.KafkaBasedLog.WorkThread.run@POLYN248168 the MagicNumber/String  'Unexpected exception in {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00190] Public method readToEnd is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/KafkaBasedLog.java.html#196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00196] Public method send is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
