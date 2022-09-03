console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "DeleteConsumerGroupOffsetsResult"
 , "c2" : "DeleteConsumerGroupOffsetsResult(KafkaFuture<Map<TopicPartition,Errors>>;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaFuture<Void>"
 , "c2" : "partitionResult(TopicPartition)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaFuture<Void>"
 , "c2" : "all()"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "maybeCompleteExceptionally(Map<TopicPartition,Errors>;TopicPartition;KafkaFutureImpl<Void>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class DeleteConsumerGroupOffsetsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method partitionResult arguments TopicPartition  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.partitionResult@POLYN153064 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.partitionResult@POLYN153064 the MagicNumber/String  ' was not included in the original request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.partitionResult@POLYN153064 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.partitionResult@POLYN153064 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.all@POLYN154087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.all@POLYN154087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method maybeCompleteExceptionally arguments Map&lt;TopicPartition ,Errors &gt;  partitionLevelErrors|TopicPartition  partition|KafkaFutureImpl&lt;Void &gt;  result"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.maybeCompleteExceptionally@POLYN154854 the MagicNumber/String  'Offset deletion result for partition \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.maybeCompleteExceptionally@POLYN154854 the MagicNumber/String  '\' was not included in the response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.maybeCompleteExceptionally@POLYN154854 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.maybeCompleteExceptionally@POLYN154854 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteConsumerGroupOffsetsResult.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.DeleteConsumerGroupOffsetsResult.maybeCompleteExceptionally@POLYN154854 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
