console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java 33 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.WriteTxnMarkersRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.WriteTxnMarkersRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#144"
 , "c1" : "WriteTxnMarkersRequest"
 , "c2" : "WriteTxnMarkersRequest(WriteTxnMarkersRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#150"
 , "c1" : "WriteTxnMarkersRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00155"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#155"
 , "c1" : "WriteTxnMarkersResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00172"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#172"
 , "c1" : "List&lt;TxnMarkerEntry&gt;"
 , "c2" : "markers()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00192"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#192"
 , "c1" : "WriteTxnMarkersRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00197"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#197"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00205"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#205"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  'TxnMarkerEntry{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  'producerId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  ', producerEpoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  ', coordinatorEpoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  ', result=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  ', partitions=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN177062 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00089] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.equals@POLYN177418 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.equals@POLYN177418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.equals@POLYN177418 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00117] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00160] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00161] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00175] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00199] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.equals@POLYN183425 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.equals@POLYN183425 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.equals@POLYN183425 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.WriteTxnMarkersRequest.getErrorResponse@POLYN180845"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
