console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java 34 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.WriteTxnMarkersRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.WriteTxnMarkersRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WriteTxnMarkersRequest"
 , "c2" : "WriteTxnMarkersRequest(WriteTxnMarkersRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "WriteTxnMarkersRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WriteTxnMarkersResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "List<TxnMarkerEntry>"
 , "c2" : "markers()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "WriteTxnMarkersRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.svg" }

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
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
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
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class TxnMarkerEntry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  'TxnMarkerEntry{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  'producerId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  ', producerEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  ', coordinatorEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  ', result=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  ', partitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.toString@POLYN185562 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00074] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.equals@POLYN185918 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.equals@POLYN185918 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.TxnMarkerEntry.equals@POLYN185918 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00160] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00161] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00184] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.equals@POLYN191905 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.equals@POLYN191905 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.requests.WriteTxnMarkersRequest.equals@POLYN191905 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/WriteTxnMarkersRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.WriteTxnMarkersRequest.getErrorResponse@POLYN189335"
}} 
]
};
console.log('leListeStr 99 main end');
