console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java 3 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.SaslHandshakeResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.SaslHandshakeResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#18"
 , "c1" : "SaslHandshakeResponse"
 , "c2" : "SaslHandshakeResponse(SaslHandshakeResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#24"
 , "c1" : "Errors"
 , "c2" : "error()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#29"
 , "c1" : "Map<Errors,Integer>"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#34"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#39"
 , "c1" : "SaslHandshakeResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#43"
 , "c1" : "List<String>"
 , "c2" : "enabledMechanisms()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#47"
 , "c1" : "SaslHandshakeResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.SaslHandshakeResponse.enabledMechanisms@POLYN148529"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/SaslHandshakeResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.SaslHandshakeResponse.errorCounts@POLYN148132"
}} 
]
};
console.log('leListeStr 99 main end');
