console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java 41 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Closeable"
 , "c2" : "org.apache.kafka.clients.producer.internals.ProducerInterceptors"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.ProducerInterceptors" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#39"
 , "c1" : "ProducerInterceptors"
 , "c2" : "ProducerInterceptors(List&lt;ProducerInterceptor&lt;K,V&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#57"
 , "c1" : "ProducerRecord&lt;K,V&gt;"
 , "c2" : "onSend(ProducerRecord&lt;K,V&gt;)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#85"
 , "c1" : "void"
 , "c2" : "onAcknowledgement(RecordMetadata;Exception)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#106"
 , "c1" : "void"
 , "c2" : "onSendError(ProducerRecord&lt;K,V&gt;;TopicPartition;Exception)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00133"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#133"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c4" : "14"
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method onSend arguments ProducerRecord&lt;K ,V &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00062] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049 the MagicNumber/String  'Error executing interceptor onSend callback for topic: {}, partition: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049 the MagicNumber/String  'Error executing interceptor onSend callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method onAcknowledgement arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onAcknowledgement@POLYN179332 the MagicNumber/String  'Error executing interceptor onAcknowledgement callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method onSendError arguments ProducerRecord&lt;K ,V &gt;  record|TopicPartition  interceptTopicPartition|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String  'Error executing interceptor onAcknowledgement callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.producer.internals.ProducerInterceptors.close@POLYN181682 the MagicNumber/String  'Failed to close producer interceptor ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.ProducerInterceptors.close@POLYN181682"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.ProducerInterceptors.onAcknowledgement@POLYN179332"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.close@POLYN181682 the MagicNumber/String 'Failed to close producer interceptor ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onAcknowledgement@POLYN179332 the MagicNumber/String 'Error executing interceptor onAcknowledgement callback' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049 the MagicNumber/String 'Error executing interceptor onSend callback for topic: {}, partition: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSend@POLYN178049 the MagicNumber/String 'Error executing interceptor onSend callback' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.clients.producer.internals.ProducerInterceptors.onSendError@POLYN180129 the MagicNumber/String 'Error executing interceptor onAcknowledgement callback' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerInterceptors.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
