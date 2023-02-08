console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java 3 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.ElectLeadersResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.ElectLeadersResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html#40"
 , "c1" : "ElectLeadersResult"
 , "c2" : "ElectLeadersResult(KafkaFuture&lt;Map&lt;TopicPartition,Optional&lt;Throwable&gt;&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html#49"
 , "c1" : "KafkaFuture&lt;Map&lt;TopicPartition,Optional&lt;Throwable&gt;&gt;&gt;"
 , "c2" : "partitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html#56"
 , "c1" : "KafkaFuture&lt;Void&gt;"
 , "c2" : "all()"
 , "c3" : "5"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.ElectLeadersResult.all@POLYN152669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.admin.ElectLeadersResult.all@POLYN152669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00056] Public method all is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ElectLeadersResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
