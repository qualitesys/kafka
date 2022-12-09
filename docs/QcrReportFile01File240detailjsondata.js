console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.ProduceRequestResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.ProduceRequestResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#23"
 , "c1" : "ProduceRequestResult"
 , "c2" : "ProduceRequestResult(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#28"
 , "c1" : "void"
 , "c2" : "set(long;long;Function<Integer,RuntimeException>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#35"
 , "c1" : "void"
 , "c2" : "done()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#42"
 , "c1" : "void"
 , "c2" : "await()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#47"
 , "c1" : "boolean"
 , "c2" : "await(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#52"
 , "c1" : "long"
 , "c2" : "baseOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#57"
 , "c1" : "boolean"
 , "c2" : "hasLogAppendTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#62"
 , "c1" : "long"
 , "c2" : "logAppendTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#67"
 , "c1" : "RuntimeException"
 , "c2" : "error(int)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#76"
 , "c1" : "TopicPartition"
 , "c2" : "topicPartition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#81"
 , "c1" : "boolean"
 , "c2" : "completed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method set arguments long  baseOffset|long  logAppendTime|Function&lt;Integer ,RuntimeException &gt;  errorsByIndex"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.producer.internals.ProduceRequestResult.done@POLYN158049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.clients.producer.internals.ProduceRequestResult.done@POLYN158049 the MagicNumber/String  'The method `set` must be invoked before this method.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method await arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method error arguments int  batchIndex"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.producer.internals.ProduceRequestResult.error@POLYN159334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.clients.producer.internals.ProduceRequestResult.error@POLYN159334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.producer.internals.ProduceRequestResult.completed@POLYN159782 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00047] Public method await is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00052] Public method baseOffset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method hasLogAppendTime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00062] Public method logAppendTime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method completed is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00035] Public method done is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00042] Public method await is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProduceRequestResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
