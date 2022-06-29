console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java 26 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.LoggingSignalHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.LoggingSignalHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "LoggingSignalHandler"
 , "c2" : "LoggingSignalHandler()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "register()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "createSignalHandler(Map<String,Object>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "5"
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class LoggingSignalHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String  'sun.misc.Signal' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String  'sun.misc.SignalHandler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String  'handle' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String  'handle' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String  'getName' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN176145 the MagicNumber/String  'Registered signal handlers for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN176145 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method createSignalHandler arguments Map&lt;String ,Object &gt;  jvmSignalHandlers"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method createSignalHandler list of called methods Object monObjet|Object argsN177387"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument jvmSignalHandlers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN176647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN176647 the MagicNumber/String  'Terminating process due to signal {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN176647 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.utils.LoggingSignalHandler.createSignalHandler@POLYN176647 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method register arguments String  signalName|Map&lt;String ,Object &gt;  jvmSignalHandlers"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument jvmSignalHandlers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN178034 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.utils.LoggingSignalHandler.register@POLYN178034 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00040] Public method register is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00031] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String 'sun.misc.Signal' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String 'sun.misc.SignalHandler' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String 'handle' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String 'handle' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LoggingSignalHandler.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method org.apache.kafka.common.utils.LoggingSignalHandler.LoggingSignalHandler@POLYN175134 the MagicNumber/String 'getName' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
