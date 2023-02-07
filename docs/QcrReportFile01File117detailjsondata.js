console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java 4 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.ListTransactionsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.ListTransactionsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#40"
 , "c1" : "ListTransactionsResult"
 , "c2" : "ListTransactionsResult(KafkaFuture&lt;Map&lt;Integer,KafkaFutureImpl&lt;Collection&lt;TransactionListing&gt;&gt;&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#51"
 , "c1" : "KafkaFuture&lt;Collection&lt;TransactionListing&gt;&gt;"
 , "c2" : "all()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#71"
 , "c1" : "KafkaFuture&lt;Map&lt;Integer,KafkaFuture&lt;Collection&lt;TransactionListing&gt;&gt;&gt;&gt;"
 , "c2" : "byBrokerId()"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#95"
 , "c1" : "KafkaFuture&lt;Map&lt;Integer,Collection&lt;TransactionListing&gt;&gt;&gt;"
 , "c2" : "allByBrokerId()"
 , "c3" : "6"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.clients.admin.ListTransactionsResult.byBrokerId@POLYN164209 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.admin.ListTransactionsResult.allByBrokerId@POLYN165480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.admin.ListTransactionsResult.allByBrokerId@POLYN165480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00051] Public method all is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListTransactionsResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
