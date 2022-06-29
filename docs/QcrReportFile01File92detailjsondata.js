console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java 13 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DescribeTransactionsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DescribeTransactionsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeTransactionsResult"
 , "c2" : "DescribeTransactionsResult(Map<CoordinatorKey,KafkaFuture<TransactionDescription>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<TransactionDescription>"
 , "c2" : "description(String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Map<String,TransactionDescription>>"
 , "c2" : "all()"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class DescribeTransactionsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method description arguments String  transactionalId"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00022] For method description list of called methods Object monObjet|org.apache.kafka.clients.admin.internals.CoordinatorKey CoordinatorKey_byTransactionalIdN170808"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String  'TransactionalId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String  '` was not included in the request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.clients.admin.DescribeTransactionsResult.all@POLYN171583 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00026] In the recursive method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String 'TransactionalId ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00027] In the recursive method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String '` was not included in the request' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeTransactionsResult.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00027] In the recursive method org.apache.kafka.clients.admin.DescribeTransactionsResult.description@POLYN170711 the MagicNumber/String '`' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
