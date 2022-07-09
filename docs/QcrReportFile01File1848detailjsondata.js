console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java 73 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RecordCollector"
 , "c2" : "org.apache.kafka.streams.processor.internals.RecordCollectorImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.RecordCollectorImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RecordCollectorImpl"
 , "c2" : "RecordCollectorImpl(LogContext;TaskId;StreamsProducer;ProductionExceptionHandler;StreamsMetricsImpl;ProcessorTopology)"
 , "c3" : "2"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initialize()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordSendError(String;Exception;ProducerRecord<byte[],byte[]>)"
 , "c3" : "9"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isFatalException(Exception)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeClean()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeDirty()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeAllProducedSensors()"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "offsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkForException()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Producer<byte[],byte[]>"
 , "c2" : "producer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.svg" }

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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
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
 , "c4" : "1"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00046] The class RecordCollectorImpl contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument streamsProducer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument topology is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Could not get partitions for topic {}, will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Could not determine the number of partitions for topic '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  '' for task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  ' due to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Could not get partition information for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  ' for task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  '. This can happen if the topic does not exist.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#152"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00152] The argument keySerializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument valueSerializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#155"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00155] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'unknown because key is null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'unknown because value is null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'ClassCastException while producing data to topic %s. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'A serializer (key: %s / value: %s) is not compatible to the actual key or value type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  '(key type: %s / value type: %s). ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Change the default Serdes in StreamConfig or provide correct Serdes via method parameters ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  '(for example if using the DSL, `#to(String topic, Produced&amp;lt;K, V&amp;gt; produced)` with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  '`Produced.keySerde(WindowedSerdes.timeWindowedSerdeFrom(String.class))`).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Received offset={} in produce response for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  '-changelog' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Unable to records bytes produced to topic {} by sink node {} as the node is not recognized.\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Known sink nodes are {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl the MagicNumber/String  'Failed record: (key {} value {} timestamp {}) topic=[{}] partition=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method recordSendError arguments String  topic|Exception  exception|ProducerRecord&lt;byte[] ,byte[] &gt;  serializedRecord"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#232"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00232] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '\nWritten offsets would not be recorded and no more records would be sent since this is a fatal error.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '\nWritten offsets would not be recorded and no more records would be sent since the producer is fenced, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  'indicating the task may be migrated out' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '\nThe broker is either slow or in bad state (like not having enough replicas) in responding the request, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  'or the connection to broker was interrupted sending the request or receiving the response. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '\nConsider overwriting `max.block.ms` and /or ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '`delivery.timeout.ms` to a larger value to wait longer for such scenarios and avoid timeout errors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '\nException handler choose to FAIL the processing, no more records would be sent.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String  '\nException handler choose to CONTINUE processing in spite of this error but written offsets would not be recorded.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method isFatalException arguments Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.flush@POLYN207626 the MagicNumber/String  'Flushing record collector' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.closeClean@POLYN207951 the MagicNumber/String  'Closing record collector clean' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.closeDirty@POLYN208268 the MagicNumber/String  'Closing record collector dirty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00316] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.checkForException@POLYN209103 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.checkForException@POLYN209103 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RecordCollectorImpl.closeClean@POLYN207951"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RecordCollectorImpl.closeDirty@POLYN208268"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RecordCollectorImpl.flush@POLYN207626"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.closeClean@POLYN207951 the MagicNumber/String 'Closing record collector clean' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '\nWritten offsets would not be recorded and no more records would be sent since this is a fatal error.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00241] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '\nWritten offsets would not be recorded and no more records would be sent since the producer is fenced, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00242] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String 'indicating the task may be migrated out' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '\nThe broker is either slow or in bad state -like not having enough replicas- in responding the request, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00247] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String 'or the connection to broker was interrupted sending the request or receiving the response. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00248] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '\nConsider overwriting `max.block.ms` and /or ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '`delivery.timeout.ms` to a larger value to wait longer for such scenarios and avoid timeout errors' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '\nException handler choose to FAIL the processing, no more records would be sent.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.recordSendError@POLYN205093 the MagicNumber/String '\nException handler choose to CONTINUE processing in spite of this error but written offsets would not be recorded.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.closeDirty@POLYN208268 the MagicNumber/String 'Closing record collector dirty' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordCollectorImpl.java.html#282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00282] In the recursive method org.apache.kafka.streams.processor.internals.RecordCollectorImpl.flush@POLYN207626 the MagicNumber/String 'Flushing record collector' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
