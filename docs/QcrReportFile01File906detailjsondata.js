console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java 23 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.LoggingSignalHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.LoggingSignalHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#49"
 , "c1" : "LoggingSignalHandler"
 , "c2" : "LoggingSignalHandler()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c1" : "void"
 , "c2" : "register()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c1" : "Object"
 , "c2" : "createSignalHandler(Map<String,Object>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c1" : "void"
 , "c2" : "register(String;Map<String,Object>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
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
 , "c4" : "2"
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
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN157108 the MagicNumber/String  'sun.misc.Signal' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN157108 the MagicNumber/String  'sun.misc.SignalHandler' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN157108 the MagicNumber/String  'handle' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN157108 the MagicNumber/String  'handle' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN157108 the MagicNumber/String  'getName' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN158119 the MagicNumber/String  'Registered signal handlers for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN158119 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method createSignalHandler arguments Map&lt;String ,Object &gt;  jvmSignalHandlers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00109] For method createSignalHandler list of called methods Object monObjet|V jvmSignalHandlers_getN159542"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument jvmSignalHandlers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN158621 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN158621 the MagicNumber/String  'Terminating process due to signal {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN158621 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN158621 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method register arguments String  signalName|Map&lt;String ,Object &gt;  jvmSignalHandlers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00109] For method register list of called methods Object monObjet|java.lang.Object createSignalHandlerN160272"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument jvmSignalHandlers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN160008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN160008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00109] Public method register is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN160008"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN160008 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN160008 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
