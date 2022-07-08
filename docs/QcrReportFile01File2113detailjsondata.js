console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java 156 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.tools.TransactionalMessageCopier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.TransactionalMessageCopier" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ArgumentParser"
 , "c2" : "argParser()"
 , "c3" : "1"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer<String,String>"
 , "c2" : "createProducer(Namespace)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConsumer<String,String>"
 , "c2" : "createConsumer(Namespace)"
 , "c3" : "1"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "ProducerRecord<String,String>"
 , "c2" : "producerRecordFromConsumerRecord(String;ConsumerRecord<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "consumerPositions(KafkaConsumer<String,String>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetToLastCommittedPositions(KafkaConsumer<String,String>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "messagesRemaining(KafkaConsumer<String,String>;TopicPartition)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toJsonString(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "statusAsJson(String;long;long;long;String)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "abortTransactionAndResetPosition(KafkaProducer<String,String>;KafkaConsumer<String,String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "runEventLoop(Namespace)"
 , "c3" : "9"
 , "c4" : "44"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
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
 , "c4" : "130"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00047] The class TransactionalMessageCopier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'transactional-message-copier' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'This tool copies messages transactionally from an input partition to an output topic, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'committing the consumed offsets along with the output messages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--input-topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'INPUT-TOPIC' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'inputTopic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Consume messages from this topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--input-partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'INPUT-PARTITION' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'inputPartition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Consume messages from this partition of the input topic.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--output-topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'OUTPUT-TOPIC' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'outputTopic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Produce messages to this topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--broker-list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'HOST1:PORT1[,HOST2:PORT2[...]]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Comma-separated list of Kafka brokers in the form HOST1:PORT1,HOST2:PORT2,...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--max-messages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'MAX-MESSAGES' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Process these many messages upto the end offset at the time this program was launched. If set to -1 ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'we will just read to the end offset of the input partition (as of the time the program was launched).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--consumer-group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'CONSUMER-GROUP' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'consumerGroup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'The consumer group id to use for storing the consumer offsets.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--transaction-size' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  200 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'TRANSACTION-SIZE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'messagesPerTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'The number of messages to put in each transaction. Default is 200.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--transaction-timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  60000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'TRANSACTION-TIMEOUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'transactionTimeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'The transaction timeout in milliseconds. Default is 60000(1 minute).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--transactional-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'TRANSACTIONAL-ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'The transactionalId to assign to the producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--enable-random-aborts' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'ENABLE-RANDOM-ABORTS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'enableRandomAborts' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Whether or not to enable random transaction aborts (for system testing)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--group-mode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'GROUP-MODE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'groupMode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Whether to let consumer subscribe to the input topic or do manual assign. If we do' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  ' subscription based consumption, the input partition shall be ignored' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  '--use-group-metadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'USE-GROUP-METADATA' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'useGroupMetadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.tools.TransactionalMessageCopier.argParser@POLYN206273 the MagicNumber/String  'Whether to use the new transactional commit API with group metadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method createProducer arguments Namespace  parsedArgs"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#161"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00161] The argument parsedArgs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  'org.apache.kafka.common.serialization.StringSerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  'org.apache.kafka.common.serialization.StringSerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  '512' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  '5' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.tools.TransactionalMessageCopier.createProducer@POLYN210754 the MagicNumber/String  'transactionTimeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method createConsumer arguments Namespace  parsedArgs"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#179"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00179] The argument parsedArgs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'consumerGroup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'messagesPerTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'read_committed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  '10000' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  '180000' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  '3000' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'org.apache.kafka.common.serialization.StringDeserializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.tools.TransactionalMessageCopier.createConsumer@POLYN211864 the MagicNumber/String  'org.apache.kafka.common.serialization.StringDeserializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method producerRecordFromConsumerRecord arguments String  topic|ConsumerRecord&lt;String ,String &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#203"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00203] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#207"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00207] For method consumerPositions arguments KafkaConsumer&lt;String ,String &gt;  consumer"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#207"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00207] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.tools.TransactionalMessageCopier.consumerPositions@POLYN213957 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method resetToLastCommittedPositions arguments KafkaConsumer&lt;String ,String &gt;  consumer"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.tools.TransactionalMessageCopier.resetToLastCommittedPositions@POLYN214511 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method messagesRemaining arguments KafkaConsumer&lt;String ,String &gt;  consumer|TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#226"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00226] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.tools.TransactionalMessageCopier.messagesRemaining@POLYN215256 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#235"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00235] For method toJsonString arguments Map&lt;String ,Object &gt;  data"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.tools.TransactionalMessageCopier.toJsonString@POLYN215874 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#246"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00246] Lock statement on synchronized method statusAsJson"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method statusAsJson arguments String  stage|long  totalProcessed|long  consumedSinceLastRebalanced|long  remaining|String  transactionalId"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.tools.TransactionalMessageCopier.statusAsJson@POLYN216391 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.tools.TransactionalMessageCopier.statusAsJson@POLYN216391 the MagicNumber/String  'stage' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.tools.TransactionalMessageCopier.statusAsJson@POLYN216391 the MagicNumber/String  'time' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.tools.TransactionalMessageCopier.statusAsJson@POLYN216391 the MagicNumber/String  'totalProcessed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.tools.TransactionalMessageCopier.statusAsJson@POLYN216391 the MagicNumber/String  'consumed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.tools.TransactionalMessageCopier.statusAsJson@POLYN216391 the MagicNumber/String  'remaining' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00263] For method abortTransactionAndResetPosition arguments KafkaProducer&lt;String ,String &gt;  producer|KafkaConsumer&lt;String ,String &gt;  consumer"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#264"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00264] The argument producer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#271"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00271] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.tools.TransactionalMessageCopier.main@POLYN217658 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.tools.TransactionalMessageCopier.main@POLYN217658 the MagicNumber/String  'Shutting down after unexpected error in event loop' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.tools.TransactionalMessageCopier.main@POLYN217658 the MagicNumber/String  'Shutting down after unexpected error ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.tools.TransactionalMessageCopier.main@POLYN217658 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.tools.TransactionalMessageCopier.main@POLYN217658 the MagicNumber/String  ' (see the log for additional detail)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.tools.TransactionalMessageCopier.main@POLYN217658 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method runEventLoop arguments Namespace  parsedArgs"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#284"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00284] The argument parsedArgs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00357] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00362] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00368] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00379] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'outputTopic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'consumerGroup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'groupMode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'inputTopic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'RebalanceComplete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'inputPartition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'enableRandomAborts' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'transactional-message-copier-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'ShutdownComplete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'useGroupMetadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'ProcessLoop' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  200 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'The transactional.id %s has been claimed by another process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'Aborting transaction after catching exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionalMessageCopier.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.tools.TransactionalMessageCopier.runEventLoop@POLYN218443 the MagicNumber/String  'consumer' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
