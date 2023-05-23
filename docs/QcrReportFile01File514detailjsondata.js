console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java 25 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ChannelBuilder"
 , "c2" : "org.apache.kafka.common.network.SslChannelBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.SslChannelBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#56"
 , "c1" : "SslChannelBuilder"
 , "c2" : "SslChannelBuilder(Mode;ListenerName;boolean;LogContext)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#66"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#82"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "reconfigurableConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#87"
 , "c1" : "void"
 , "c2" : "validateReconfiguration(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#92"
 , "c1" : "void"
 , "c2" : "reconfigure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#97"
 , "c1" : "ListenerName"
 , "c2" : "listenerName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#102"
 , "c1" : "KafkaChannel"
 , "c2" : "buildChannel(String;SelectionKey;int;MemoryPool;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#117"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00121"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#121"
 , "c1" : "SslTransportLayer"
 , "c2" : "buildTransportLayer(SslFactory;String;SelectionKey;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.network.SslChannelBuilder.configure@POLYN174337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.network.SslChannelBuilder.configure@POLYN174337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method validateReconfiguration arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method reconfigure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method buildChannel arguments String  id|SelectionKey  key|int  maxReceiveSize|MemoryPool  memoryPool|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN175842 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN175842 the MagicNumber/String  'Failed to create channel due to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.common.network.SslChannelBuilder.close@POLYN176887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method buildTransportLayer arguments SslFactory  sslFactory|String  id|SelectionKey  key|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument sslFactory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.SslAuthenticator@POLYN177808 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00152] For method principal list of called methods Object monObjet|java.nio.channels.SocketChannel transportLayer_socketChannelN178503"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.principal@POLYN178428 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.principal@POLYN178428 the MagicNumber/String  'Unexpected call to principal() when listenerName is null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.close@POLYN179241 the MagicNumber/String  'principal builder' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.network.SslChannelBuilder.SslAuthenticator.complete@POLYN179542 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00145] Void method authenticate is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00145] Void method authenticate is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN175842"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN175842 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.common.network.SslChannelBuilder.buildChannel@POLYN175842 the MagicNumber/String 'Failed to create channel due to ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslChannelBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
