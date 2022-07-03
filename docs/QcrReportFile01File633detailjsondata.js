console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java 21 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.DeleteAclsResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DeleteAclsResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DeleteAclsResponse"
 , "c2" : "DeleteAclsResponse(DeleteAclsResponseData;short)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "DeleteAclsResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<DeleteAclsResponseData.DeleteAclsFilterResult>"
 , "c2" : "filterResults()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Errors,Integer>"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DeleteAclsResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldClientThrottle(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validate(short)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "DeleteAclsFilterResult"
 , "c2" : "filterResult(AclDeleteResult)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "DeleteAclsMatchingAcl"
 , "c2" : "matchingAcl(AclDeleteResult.AclBindingDeleteResult)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "DeleteAclsMatchingAcl"
 , "c2" : "matchingAcl(AclBinding;ApiError)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AclBinding"
 , "c2" : "aclBinding(DeleteAclsMatchingAcl)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.DeleteAclsResponse.shouldClientThrottle@POLYN188635 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method validate arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00070] For method validate list of called methods Object monObjet|java.util.List&lt;DeleteAclsResponseData.DeleteAclsFilterResult&gt; filterResultsN188930|java.util.List&lt;DeleteAclsResponseData.DeleteAclsFilterResult&gt; filterResultsN189372"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.requests.DeleteAclsResponse.validate@POLYN188759 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.requests.DeleteAclsResponse.validate@POLYN188759 the MagicNumber/String  'Version 0 only supports literal resource pattern types' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.requests.DeleteAclsResponse.validate@POLYN188759 the MagicNumber/String  'DeleteAclsMatchingAcls contain UNKNOWN elements' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method filterResult arguments AclDeleteResult  result"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method filterResult list of called methods Object monObjet|java.util.Optional&lt;org.apache.kafka.common.errors.ApiException&gt; result_exceptionN190162|java.util.Collection&lt;org.apache.kafka.server.authorizer.AclDeleteResult.AclBindingDeleteResult&gt; result_aclBindingDeleteResultsN190409"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method matchingAcl arguments AclDeleteResult.AclBindingDeleteResult  result"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method matchingAcl arguments AclBinding  acl|ApiError  error"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument acl is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method aclBinding arguments DeleteAclsMatchingAcl  matchingAcl"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument matchingAcl is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DeleteAclsResponse.filterResults@POLYN187789"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DeleteAclsResponse.throttleTimeMs@POLYN187654"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DeleteAclsResponse.toString@POLYN188515"
}} 
]
};
console.log('leListeStr 99 main end');
