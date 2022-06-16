console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java 24 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class RequestFuture contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method awaitDone arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.clients.consumer.internals.RequestFuture.value@POLYN191682 the MagicNumber/String  'Attempt to retrieve value from future which hasn't successfully completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.consumer.internals.RequestFuture.exception@POLYN192791 the MagicNumber/String  'Attempt to retrieve exception from future which hasn't failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method complete arguments T  value"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.clients.consumer.internals.RequestFuture.complete@POLYN193296 the MagicNumber/String  'The argument to complete can not be an instance of RuntimeException' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.clients.consumer.internals.RequestFuture.complete@POLYN193296 the MagicNumber/String  'Invalid attempt to complete a request future which is already complete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method raise arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.consumer.internals.RequestFuture.raise@POLYN193961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.RequestFuture.raise@POLYN193961 the MagicNumber/String  'The exception passed to raise must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.RequestFuture.raise@POLYN193961 the MagicNumber/String  'Invalid attempt to complete a request future which is already complete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method raise arguments Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.consumer.internals.RequestFuture.fireSuccess@POLYN194702 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.clients.consumer.internals.RequestFuture.fireSuccess@POLYN194702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.consumer.internals.RequestFuture.fireFailure@POLYN195103 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.consumer.internals.RequestFuture.fireFailure@POLYN195103 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method addListener arguments RequestFutureListener&lt;T &gt;  listener"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument adapter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method chain arguments RequestFuture&lt;T &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/RequestFuture.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.consumer.internals.RequestFuture.voidSuccess@POLYN197679 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
