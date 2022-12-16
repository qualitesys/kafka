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
{ "ligne" : { "" : ""
 , "c1" : "Thread"
 , "c2" : "kafka.examples.ExactlyOnceMessageProcessor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.examples.ExactlyOnceMessageProcessor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#59"
 , "c1" : "ExactlyOnceMessageProcessor"
 , "c2" : "ExactlyOnceMessageProcessor(String;String;int;CountDownLatch)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#79"
 , "c1" : "void"
 , "c2" : "run()"
 , "c3" : "4"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#143"
 , "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "consumerOffsets()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#151"
 , "c1" : "void"
 , "c2" : "printWithTxnId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00155"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#155"
 , "c1" : "ProducerRecord<Integer,String>"
 , "c2" : "transform(ConsumerRecord<Integer,String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#160"
 , "c1" : "long"
 , "c2" : "messagesRemaining(KafkaConsumer<Integer,String>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#177"
 , "c1" : "void"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "32"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  'Processor-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  'Txn-consumer-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  'Eos-consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method kafka.examples.ExactlyOnceMessageProcessor.ExactlyOnceMessageProcessor@POLYN168469 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  'Revoked partition assignment to kick-off rebalancing: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  'Received partition assignment after rebalancing: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  200 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  'The transactional.id %s has been claimed by another process' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  'The group.instance.id %s has been claimed by another process' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  'Message remaining: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  'Finished processing ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method kafka.examples.ExactlyOnceMessageProcessor.run@POLYN169600 the MagicNumber/String  ' records' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method kafka.examples.ExactlyOnceMessageProcessor.consumerOffsets@POLYN172490 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method printWithTxnId arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method kafka.examples.ExactlyOnceMessageProcessor.printWithTxnId@POLYN172980 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method transform arguments ConsumerRecord&lt;Integer ,String &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#155"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00155] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173216 the MagicNumber/String  'Transformed record (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173216 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173216 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173216 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method kafka.examples.ExactlyOnceMessageProcessor.transform@POLYN173216 the MagicNumber/String  'Transformed_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method messagesRemaining arguments KafkaConsumer&lt;Integer ,String &gt;  consumer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method kafka.examples.ExactlyOnceMessageProcessor.messagesRemaining@POLYN173741 the MagicNumber/String  'Processing partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method kafka.examples.ExactlyOnceMessageProcessor.messagesRemaining@POLYN173741 the MagicNumber/String  ' with full offsets ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method kafka.examples.ExactlyOnceMessageProcessor.messagesRemaining@POLYN173741 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method resetToLastCommittedPositions arguments KafkaConsumer&lt;Integer ,String &gt;  consumer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method kafka.examples.ExactlyOnceMessageProcessor.resetToLastCommittedPositions@POLYN174766 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/examples/src/main/java/kafka/examples/ExactlyOnceMessageProcessor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
