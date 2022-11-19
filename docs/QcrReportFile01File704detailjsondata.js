console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java 5 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.OffsetDeleteRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.OffsetDeleteRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#36"
 , "c1" : "OffsetDeleteRequest"
 , "c2" : "OffsetDeleteRequest(OffsetDeleteRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#41"
 , "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#50"
 , "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#54"
 , "c1" : "OffsetDeleteRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#59"
 , "c1" : "OffsetDeleteRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method getErrorResponse arguments int  throttleTimeMs|Errors  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/OffsetDeleteRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
