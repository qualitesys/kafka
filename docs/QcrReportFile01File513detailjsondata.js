console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java 23 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.xml" 
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class SslChannelBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.network.SslChannelBuilder.configure@POLYN179875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.network.SslChannelBuilder.configure@POLYN179875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method validateReconfiguration arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method reconfigure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method buildChannel arguments String  id|SelectionKey  key|int  maxReceiveSize|MemoryPool  memoryPool|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN181380 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN181380 the MagicNumber/String  'Failed to create channel due to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.network.SslChannelBuilder.close@POLYN182415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method buildTransportLayer arguments SslFactory  sslFactory|String  id|SelectionKey  key|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument sslFactory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00110] The class SslAuthenticator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.SslAuthenticator@POLYN183336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.principal@POLYN183956 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.principal@POLYN183956 the MagicNumber/String  'Unexpected call to principal() when listenerName is null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.close@POLYN184769 the MagicNumber/String  'principal builder' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.complete@POLYN185070 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00122] Void method authenticate is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00122] Void method authenticate is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
