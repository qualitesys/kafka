console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java 16 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.DescribeClientQuotasRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeClientQuotasRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#77"
 , "c1" : "DescribeClientQuotasRequest"
 , "c2" : "DescribeClientQuotasRequest(DescribeClientQuotasRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#82"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "filter()"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#109"
 , "c1" : "DescribeClientQuotasRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00114"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#114"
 , "c1" : "DescribeClientQuotasResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#123"
 , "c1" : "DescribeClientQuotasRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.requests.DescribeClientQuotasRequest.Builder.Builder@POLYN164106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.requests.DescribeClientQuotasRequest.Builder.Builder@POLYN164106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.requests.DescribeClientQuotasRequest.Builder.Builder@POLYN164106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00082] For method filter list of called methods Object monObjet|org.apache.kafka.common.quota.ClientQuotaFilterComponent ClientQuotaFilterComponent_ofEntityN166617|org.apache.kafka.common.quota.ClientQuotaFilterComponent ClientQuotaFilterComponent_ofDefaultEntityN166821|org.apache.kafka.common.quota.ClientQuotaFilterComponent ClientQuotaFilterComponent_ofEntityTypeN166983"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.requests.DescribeClientQuotasRequest.filter@POLYN166156 the MagicNumber/String  'Unexpected match type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00114] For method getErrorResponse list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN167766"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.requests.DescribeClientQuotasRequest.getErrorResponse@POLYN167644 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeClientQuotasRequest.Builder.toString@POLYN165762"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeClientQuotasRequest.filter@POLYN166156"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.common.requests.DescribeClientQuotasRequest.filter@POLYN166156 the MagicNumber/String 'Unexpected match type: ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
