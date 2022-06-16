console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class PlaintextTransportLayer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.network.PlaintextTransportLayer.ready@POLYN183403 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method read arguments ByteBuffer  dst"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method read arguments ByteBuffer[]  dsts"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method read arguments ByteBuffer[]  dsts|int  offset|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method write arguments ByteBuffer  src"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method write arguments ByteBuffer[]  srcs"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method write arguments ByteBuffer[]  srcs|int  offset|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.network.PlaintextTransportLayer.hasPendingWrites@POLYN187811 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method addInterestOps arguments int  ops"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method removeInterestOps arguments int  ops"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.common.network.PlaintextTransportLayer.isMute@POLYN188513 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.common.network.PlaintextTransportLayer.hasBytesBuffered@POLYN188751 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method transferFrom arguments FileChannel  fileChannel|long  position|long  count"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument fileChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00072] Void method handshake is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextTransportLayer.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00072] Void method handshake is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
