console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java 16 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.TransactionalRequestResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.TransactionalRequestResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#32"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "TransactionalRequestResult(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#36"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "TransactionalRequestResult(CountDownLatch;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#41"
 , "c1" : "void"
 , "c2" : "fail(RuntimeException)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#46"
 , "c1" : "void"
 , "c2" : "done()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#50"
 , "c1" : "void"
 , "c2" : "await()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#54"
 , "c1" : "void"
 , "c2" : "await(long;TimeUnit)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#71"
 , "c1" : "RuntimeException"
 , "c2" : "error()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#75"
 , "c1" : "boolean"
 , "c2" : "isSuccessful()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#79"
 , "c1" : "boolean"
 , "c2" : "isCompleted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#83"
 , "c1" : "boolean"
 , "c2" : "isAcked()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
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
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.TransactionalRequestResult@POLYN157616 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method fail arguments RuntimeException  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method await arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument unit is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.await@POLYN158451 the MagicNumber/String  'Timeout expired after ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.await@POLYN158451 the MagicNumber/String  'ms while awaiting ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.await@POLYN158451 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.await@POLYN158451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.await@POLYN158451 the MagicNumber/String  'Received interrupt while awaiting ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.isSuccessful@POLYN159342 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.producer.internals.TransactionalRequestResult.isCompleted@POLYN159486 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00071] Public method error is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00075] Public method isSuccessful is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00083] Public method isAcked is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00050] Public method await is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionalRequestResult.await@POLYN158303"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionalRequestResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
