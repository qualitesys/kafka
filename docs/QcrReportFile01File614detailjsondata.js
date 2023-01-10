console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.ApiVersionsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.ApiVersionsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#64"
 , "c1" : "ApiVersionsRequest"
 , "c2" : "ApiVersionsRequest(ApiVersionsRequestData;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#68"
 , "c1" : "ApiVersionsRequest"
 , "c2" : "ApiVersionsRequest(ApiVersionsRequestData;short;Short)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#80"
 , "c1" : "boolean"
 , "c2" : "hasUnsupportedRequestVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#84"
 , "c1" : "boolean"
 , "c2" : "isValid()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#94"
 , "c1" : "ApiVersionsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#99"
 , "c1" : "ApiVersionsResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#118"
 , "c1" : "ApiVersionsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.svg" }

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
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.requests.ApiVersionsRequest.ApiVersionsRequest@POLYN155619 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.requests.ApiVersionsRequest.hasUnsupportedRequestVersion@POLYN156147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.requests.ApiVersionsRequest.isValid@POLYN156257 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.requests.ApiVersionsRequest.isValid@POLYN156257 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.requests.ApiVersionsRequest.getErrorResponse@POLYN156779 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
