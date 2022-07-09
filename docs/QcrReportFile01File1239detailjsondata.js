console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html" 
 , "texte" : "File examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java 47 rule violations " 
 , "fic2"  : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Thread"
 , "c2" : "kafka.examples.ExactlyOnceMessageProcessor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.examples.ExactlyOnceMessageProcessor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ExactlyOnceMessageProcessor"
 , "c2" : "ExactlyOnceMessageProcessor(String;String;int;CountDownLatch)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "4"
 , "c4" : "23"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "consumerOffsets()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printWithTxnId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerRecord<Integer,String>"
 , "c2" : "transform(ConsumerRecord<Integer,String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "messagesRemaining(KafkaConsumer<Integer,String>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetToLastCommittedPositions(KafkaConsumer<Integer,String>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.png" 

 , "ligneplantuml" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "32"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  'Processor-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  'Txn-consumer-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  'Eos-consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  'Revoked partition assignment to kick-off rebalancing: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  'Received partition assignment after rebalancing: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  200 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  'The transactional.id %s has been claimed by another process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  'The group.instance.id %s has been claimed by another process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  'Message remaining: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  'Finished processing ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169492 the MagicNumber/String  ' records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method kafka.examples.ExactlyOnceMessageProcessor.consumerOffsets@POLYN172382 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method printWithTxnId arguments String  message"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method kafka.examples.ExactlyOnceMessageProcessor.printWithTxnId@POLYN172872 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method transform arguments ConsumerRecord&lt;Integer ,String &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173108 the MagicNumber/String  'Transformed record (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173108 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173108 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173108 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173108 the MagicNumber/String  'Transformed_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method messagesRemaining arguments KafkaConsumer&lt;Integer ,String &gt;  consumer"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method kafka.examples.ExactlyOnceMessageProcessor.messagesRemaining@POLYN173633 the MagicNumber/String  'Processing partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method kafka.examples.ExactlyOnceMessageProcessor.messagesRemaining@POLYN173633 the MagicNumber/String  ' with full offsets ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method kafka.examples.ExactlyOnceMessageProcessor.messagesRemaining@POLYN173633 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method resetToLastCommittedPositions arguments KafkaConsumer&lt;Integer ,String &gt;  consumer"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method kafka.examples.ExactlyOnceMessageProcessor.resetToLastCommittedPositions@POLYN174658 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
