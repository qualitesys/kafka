console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java 129 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.StreamsProducer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StreamsProducer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "StreamsProducer"
 , "c2" : "StreamsProducer(StreamsConfig;String;KafkaClientSupplier;TaskId;UUID;LogContext;Time)"
 , "c3" : "4"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "formatException(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "eosEnabled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "initTransaction()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "resetProducer()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "double"
 , "c2" : "getMetricValue(Map<MetricName,?extendsMetric>;String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "double"
 , "c2" : "totalBlockedTime(Producer<?,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "double"
 , "c2" : "totalBlockedTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeBeginTransaction()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Future<RecordMetadata>"
 , "c2" : "send(ProducerRecord<byte[],byte[]>;Callback)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isRecoverable(KafkaException)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "commitTransaction(Map<TopicPartition,OffsetAndMetadata>;ConsumerGroupMetadata)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "abortTransaction()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<PartitionInfo>"
 , "c2" : "partitionsFor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<MetricName,?extendsMetric>"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Producer<byte[],byte[]>"
 , "c2" : "kafkaProducer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "43"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "11"
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
 , "c4" : "55"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00045] The class StreamsProducer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument threadId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument clientSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'config cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'threadId cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'clientSupplier cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'logContext cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'taskId cannot be null for exactly-once alpha' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'processId cannot be null for exactly-once v2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  '-StreamThread-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String  'Unknown processing mode: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method formatException arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.processor.internals.StreamsProducer.formatException@POLYN194313 the MagicNumber/String  ' [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.processor.internals.StreamsProducer.formatException@POLYN194313 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'Exactly-once is not enabled' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'Timeout exception caught trying to initialize transactions. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'The broker is either slow or in bad state (like not having enough replicas) in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'responding to the request, or the connection to broker was interrupted sending ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'the request or receiving the response. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'Will retry initializing the task in the next loop. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'Consider overwriting {} to a larger value to avoid timeout errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String  'Error encountered trying to initialize transactions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00160] For method resetProducer list of called methods Object monObjet|double totalBlockedTimeN195767|Producer&lt;byte[],byte[]&gt; clientSupplier_getProducerN196140"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.processor.internals.StreamsProducer.resetProducer@POLYN195528 the MagicNumber/String  'Expected eos-v2 to be enabled, but the processing mode was ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.StreamsProducer.resetProducer@POLYN195528 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method getMetricValue arguments Map&lt;MetricName ,?  extends Metric &gt;  metrics|String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String  'found %d values for metric %s. total blocked time computation may be incorrect' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method totalBlockedTime arguments Producer&lt;? ,? &gt;  producer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument producer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'bufferpool-wait-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'flush-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'txn-init-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'txn-begin-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'txn-send-offsets-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'txn-commit-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'txn-abort-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.processor.internals.StreamsProducer.totalBlockedTime@POLYN197383 the MagicNumber/String  'metadata-wait-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404 the MagicNumber/String  'Producer got fenced trying to begin a new transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404 the MagicNumber/String  'Error encountered trying to begin a new transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00229] For method send arguments ProducerRecord&lt;byte[] ,byte[] &gt;  record|Callback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#229"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00229] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.streams.processor.internals.StreamsProducer.send@POLYN199053 the MagicNumber/String  'Producer got fenced trying to send a record' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.processor.internals.StreamsProducer.send@POLYN199053 the MagicNumber/String  'Error encountered trying to send record to topic %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method isRecoverable arguments KafkaException  uncaughtException"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#252"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00252] The argument uncaughtException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00253] The same method call uncaughtException.getCause()uncaughtException.getCause() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00254] The same method call uncaughtException.getCause() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#259"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00259] For method commitTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  consumerGroupMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#260"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00260] The argument consumerGroupMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String  'Exactly-once is not enabled' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String  'Producer got fenced trying to commit a transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String  'Error encountered trying to commit a transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String  'Exactly-once is not enabled' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String  'Aborting transaction failed due to timeout.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String  ' Will rely on broker to eventually abort the transaction after the transaction timeout passed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String  'Encountered {} while aborting the transaction; this is expected and hence swallowed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String  'Error encounter trying to abort a transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#325"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00325] For method partitionsFor arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.send@POLYN199053"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.close@POLYN202789"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.flush@POLYN202701"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.metrics@POLYN202608"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsProducer.partitionsFor@POLYN202420"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404 the MagicNumber/String 'Producer got fenced trying to begin a new transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00222] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.maybeBeginTransaction@POLYN198404 the MagicNumber/String 'Error encountered trying to begin a new transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00240] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.send@POLYN199053 the MagicNumber/String 'Producer got fenced trying to send a record' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.send@POLYN199053 the MagicNumber/String 'Error encountered trying to send record to topic %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00262] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String 'Exactly-once is not enabled' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String 'Producer got fenced trying to commit a transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00282] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.commitTransaction@POLYN200188 the MagicNumber/String 'Error encountered trying to commit a transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'config cannot be null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'threadId cannot be null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'clientSupplier cannot be null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'logContext cannot be null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'time' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'taskId cannot be null for exactly-once alpha' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'processId cannot be null for exactly-once v2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String '-StreamThread-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.StreamsProducer@POLYN191440 the MagicNumber/String 'Unknown processing mode: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String 'Exactly-once is not enabled' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00300] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String 'Aborting transaction failed due to timeout.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String ' Will rely on broker to eventually abort the transaction after the transaction timeout passed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String 'Encountered {} while aborting the transaction; this is expected and hence swallowed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00316] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String 'Error encounter trying to abort a transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.abortTransaction@POLYN201433 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String 0.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String 'found %d values for metric %s. total blocked time computation may be incorrect' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.getMetricValue@POLYN196268 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'Exactly-once is not enabled' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'Timeout exception caught trying to initialize transactions. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'The broker is either slow or in bad state -like not having enough replicas- in ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00142] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'responding to the request, or the connection to broker was interrupted sending ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'the request or receiving the response. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00144] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'Will retry initializing the task in the next loop. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'Consider overwriting {} to a larger value to avoid timeout errors' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsProducer.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00153] In the recursive method org.apache.kafka.streams.processor.internals.StreamsProducer.initTransaction@POLYN194642 the MagicNumber/String 'Error encountered trying to initialize transactions' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
