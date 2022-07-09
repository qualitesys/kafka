console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java 27 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiHandler.Unbatched<CoordinatorKey,ProducerIdAndEpoch>"
 , "c2" : "org.apache.kafka.clients.admin.internals.FenceProducersHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.FenceProducersHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FenceProducersHandler"
 , "c2" : "FenceProducersHandler(LogContext)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiFuture.SimpleAdminApiFuture<CoordinatorKey,ProducerIdAndEpoch>"
 , "c2" : "newFuture(Collection<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<CoordinatorKey>"
 , "c2" : "buildKeySet(Collection<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiLookupStrategy<CoordinatorKey>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "InitProducerIdRequest.Builder"
 , "c2" : "buildSingleRequest(int;CoordinatorKey)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<CoordinatorKey,ProducerIdAndEpoch>"
 , "c2" : "handleSingleResponse(Node;CoordinatorKey;AbstractResponse)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<CoordinatorKey,ProducerIdAndEpoch>"
 , "c2" : "handleError(CoordinatorKey;Errors)"
 , "c3" : "6"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method newFuture arguments Collection&lt;String &gt;  transactionalIds"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method buildKeySet arguments Collection&lt;String &gt;  transactionalIds"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument transactionalIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.apiName@POLYN159350 the MagicNumber/String  'fenceProducer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method buildSingleRequest arguments int  brokerId|CoordinatorKey  key"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.buildSingleRequest@POLYN159576 the MagicNumber/String  'Invalid group coordinator key ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.buildSingleRequest@POLYN159576 the MagicNumber/String  ' when building `InitProducerId` request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.buildSingleRequest@POLYN159576 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method handleSingleResponse arguments Node  broker|CoordinatorKey  key|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method handleError arguments CoordinatorKey  transactionalIdKey|Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument transactionalIdKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'InitProducerId request for transactionalId `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  '` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'failed due to cluster authorization failure' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'InitProducerId request for transactionalId `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  '` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'failed due to transactional ID authorization failure' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'InitProducerId request for transactionalId `{}` failed because the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'coordinator is still in the process of loading state. Will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'InitProducerId request for transactionalId `{}` returned error {}. Will attempt ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'to find the coordinator again and retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'InitProducerId request for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  'transactionalId `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/FenceProducersHandler.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.admin.internals.FenceProducersHandler.handleError@POLYN161291 the MagicNumber/String  '` failed due to unexpected error' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
