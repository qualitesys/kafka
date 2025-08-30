console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java 41 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiHandler.Batched<CoordinatorKey,TransactionDescription>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#50"
 , "c1" : "DescribeTransactionsHandler"
 , "c2" : "DescribeTransactionsHandler(LogContext)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#57"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture&lt;CoordinatorKey,TransactionDescription&gt;"
 , "c2" : "newFuture(Collection&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#63"
 , "c1" : "Set&lt;CoordinatorKey&gt;"
 , "c2" : "buildKeySet(Collection&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#70"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#75"
 , "c1" : "AdminApiLookupStrategy&lt;CoordinatorKey&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#80"
 , "c1" : "DescribeTransactionsRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#97"
 , "c1" : "ApiResult&lt;CoordinatorKey,TransactionDescription&gt;"
 , "c2" : "handleResponse(Node;Set&lt;CoordinatorKey&gt;;AbstractResponse)"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#140"
 , "c1" : "Set&lt;TopicPartition&gt;"
 , "c2" : "collectTopicPartitions(DescribeTransactionsResponseData.TransactionState)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00153"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#153"
 , "c1" : "void"
 , "c2" : "handleError(CoordinatorKey;Errors;Map&lt;CoordinatorKey,Throwable&gt;;List&lt;CoordinatorKey&gt;)"
 , "c3" : "6"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method newFuture arguments Collection&lt;String &gt;  transactionalIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method buildKeySet arguments Collection&lt;String &gt;  transactionalIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument transactionalIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.apiName@POLYN179318 the MagicNumber/String  'describeTransactions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method buildBatchedRequest arguments int  brokerId|Set&lt;CoordinatorKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.buildBatchedRequest@POLYN179549 the MagicNumber/String  'Invalid group coordinator key ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.buildBatchedRequest@POLYN179549 the MagicNumber/String  ' when building  DescribeTransaction  request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method handleResponse arguments Node  broker|Set&lt;CoordinatorKey &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00097] For method handleResponse list of called methods Object monObjet|org.apache.kafka.clients.admin.internals.CoordinatorKey CoordinatorKey_byTransactionalIdN181139"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleResponse@POLYN180418 the MagicNumber/String  'Response included transactionalId  {} , which was not requested' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleResponse@POLYN180418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method collectTopicPartitions arguments DescribeTransactionsResponseData.TransactionState  transactionState"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument transactionState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method handleError arguments CoordinatorKey  transactionalIdKey|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|List&lt;CoordinatorKey &gt;  unmapped"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00154] The argument transactionalIdKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#155"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00155] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#156"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00156] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument unmapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00188] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'DescribeTransactions request for transactionalId  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'failed due to authorization failure' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'DescribeTransactions request for transactionalId  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'failed because the ID could not be found' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'DescribeTransactions request for transactionalId  {}  failed because the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'coordinator is still in the process of loading state. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'DescribeTransactions request for transactionalId  {}  returned error {}. Will attempt ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'to find the coordinator again and retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'DescribeTransactions request for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  'transactionalId  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.clients.admin.internals.DescribeTransactionsHandler.handleError@POLYN183232 the MagicNumber/String  '  failed due to unexpected error' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeTransactionsHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
