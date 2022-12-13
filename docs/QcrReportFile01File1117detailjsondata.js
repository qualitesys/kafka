console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java 41 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ErrorReporter"
 , "c2" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#57"
 , "c1" : "DeadLetterQueueReporter"
 , "c2" : "createAndSetup(Map<String,Object>;ConnectorTaskId;SinkConnectorConfig;Map<String,Object>;ErrorHandlingMetrics)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#83"
 , "c1" : "DeadLetterQueueReporter"
 , "c2" : "DeadLetterQueueReporter(KafkaProducer<byte[],byte[]>;SinkConnectorConfig;ConnectorTaskId;ErrorHandlingMetrics)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#98"
 , "c1" : "Future<RecordMetadata>"
 , "c2" : "report(ProcessingContext)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#132"
 , "c1" : "void"
 , "c2" : "populateContextHeaders(ProducerRecord<byte[],byte[]>;ProcessingContext)"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#154"
 , "c1" : "byte[]"
 , "c2" : "stacktrace(Throwable)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#167"
 , "c1" : "byte[]"
 , "c2" : "toBytes(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00171"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#171"
 , "c1" : "byte[]"
 , "c2" : "toBytes(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00175"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#175"
 , "c1" : "byte[]"
 , "c2" : "toBytes(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#184"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
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
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method createAndSetup arguments Map&lt;String ,Object &gt;  adminProps|ConnectorTaskId  id|SinkConnectorConfig  sinkConfig|Map&lt;String ,Object &gt;  producerProps|ErrorHandlingMetrics  errorHandlingMetrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument sinkConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365 the MagicNumber/String  'Topic {} doesn't exist. Will attempt to create topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365 the MagicNumber/String  'Could not initialize dead letter queue with topic=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365 the MagicNumber/String  'Could not initialize dead letter queue with topic=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument connConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method report arguments ProcessingContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.report@POLYN184227 the MagicNumber/String  'Could not produce message to dead letter queue. topic=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method populateContextHeaders arguments ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|ProcessingContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00132] For method populateContextHeaders list of called methods Object monObjet|byte[] stacktraceN188082"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument producerRecord is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00148] Assigning instead of comparing on trace=stacktrace(context.error()) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.populateContextHeaders@POLYN186097 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.populateContextHeaders@POLYN186097 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.populateContextHeaders@POLYN186097 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method stacktrace arguments Throwable  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00154] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309 the MagicNumber/String  'Could not serialize stacktrace.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method toBytes arguments int  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method toBytes arguments long  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method toBytes arguments String  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN189373 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN189373 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365 the MagicNumber/String 'Topic {} doesn't exist. Will attempt to create topic.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365 the MagicNumber/String 'Could not initialize dead letter queue with topic=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.createAndSetup@POLYN181365 the MagicNumber/String 'Could not initialize dead letter queue with topic=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309 the MagicNumber/String 'Could not serialize stacktrace.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.html#164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00164] In the recursive method org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.stacktrace@POLYN188309 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/DeadLetterQueueReporter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
