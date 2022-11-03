console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/LogContext.java 208 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.LogContext"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.LogContext" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#16"
 , "c1" : "LogContext"
 , "c2" : "LogContext(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#20"
 , "c1" : "LogContext"
 , "c2" : "LogContext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#24"
 , "c1" : "Logger"
 , "c2" : "logger(Class<?>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#33"
 , "c1" : "String"
 , "c2" : "logPrefix()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "93"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "113"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class LogContext contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.utils.LogContext.LogContext@POLYN249185 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.utils.LogContext.LogContext@POLYN249185 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.common.utils.LogContext.LogContext@POLYN249418 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method logger arguments Class&lt;? &gt;  clazz"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00037] The class AbstractKafkaLogger contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method addPrefix arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method isTraceEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method isDebugEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method isInfoEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method isWarnEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method isErrorEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method trace arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN252421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN252421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN252421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method trace arguments String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN252735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN252735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method trace arguments String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN253120 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN253120 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method trace arguments String  format|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN253556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN253556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method trace arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN253896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN253896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method trace arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN254233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN254233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method trace arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN254570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method trace arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN254978 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method trace arguments Marker  marker|String  format|Object  ...argArray"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN255437 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method trace arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.trace@POLYN255800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method debug arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method debug arguments String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256474 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256474 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method debug arguments String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256859 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN256859 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method debug arguments String  format|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN257295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN257295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method debug arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN257635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN257635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method debug arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN257972 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN257972 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00227] For method debug arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN258309 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method debug arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN258717 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method debug arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN259176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method debug arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.debug@POLYN259539 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00255] For method warn arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN259899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN259899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN259899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method warn arguments String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN260141 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN260141 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method warn arguments String  message|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN260454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN260454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00270] For method warn arguments String  format|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN260818 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN260818 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#275"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00275] For method warn arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN261086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN261086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method warn arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN261351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN261351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method warn arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN261616 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00290] For method warn arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN261952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00295] For method warn arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN262339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00300] For method warn arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.warn@POLYN262630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#305"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00305] For method error arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN262918 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN262918 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN262918 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method error arguments String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN263160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN263160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method error arguments String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN263473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN263473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#320"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00320] For method error arguments String  format|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN263837 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN263837 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#325"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00325] For method error arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN264105 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN264105 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#330"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00330] For method error arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN264370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN264370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00335] For method error arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN264635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00340] For method error arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN264971 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00345] For method error arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN265358 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#350"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00350] For method error arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.error@POLYN265649 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#355"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00355] For method info arguments String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN265937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN265937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN265937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#360"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00360] For method info arguments String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN266179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN266179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#365"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00365] For method info arguments String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN266492 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN266492 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#370"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00370] For method info arguments String  format|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN266856 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN266856 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#375"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00375] For method info arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN267124 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN267124 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#380"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00380] For method info arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN267389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN267389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#385"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00385] For method info arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN267654 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#390"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00390] For method info arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN267990 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#395"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00395] For method info arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN268377 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#400"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00400] For method info arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.info@POLYN268668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#404"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00404] For method writeLog arguments Marker  marker|int  level|String  format|Object[]  args|Throwable  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.writeLog@POLYN268942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.writeLog@POLYN268942 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.writeLog@POLYN268942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.writeLog@POLYN268942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.common.utils.LogContext.LocationAwareKafkaLogger.writeLog@POLYN268942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#436"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00436] For method isTraceEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#446"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00446] For method isDebugEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method isInfoEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00466"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#466"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00466] For method isWarnEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#476"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00476] For method isErrorEnabled arguments Marker  marker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#481"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00481] For method trace arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#488"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00488] For method trace arguments String  message|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#495"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00495] For method trace arguments String  message|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#502"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00502] For method trace arguments String  message|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#509"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00509] For method trace arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#516"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00516] For method trace arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#523"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00523] For method trace arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#530"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00530] For method trace arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#537"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00537] For method trace arguments Marker  marker|String  format|Object  ...argArray"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00544"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#544"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00544] For method trace arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#551"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00551] For method debug arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#558"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00558] For method debug arguments String  message|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00565"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00565] For method debug arguments String  message|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#572"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00572] For method debug arguments String  message|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00579"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#579"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00579] For method debug arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#586"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00586] For method debug arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00593"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#593"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00593] For method debug arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#600"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00600] For method debug arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00607"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#607"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00607] For method debug arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00614"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#614"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00614] For method debug arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#621"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00621] For method warn arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#626"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00626] For method warn arguments String  message|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#631"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00631] For method warn arguments String  message|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#636"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00636] For method warn arguments String  message|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#641"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00641] For method warn arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00646"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00646] For method warn arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#651"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00651] For method warn arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#656"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00656] For method warn arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#661"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00661] For method warn arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#666"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00666] For method warn arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#671"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00671] For method error arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00676"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#676"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00676] For method error arguments String  message|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#681"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00681] For method error arguments String  message|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#686"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00686] For method error arguments String  message|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#691"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00691] For method error arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#696"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00696] For method error arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00701"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#701"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00701] For method error arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00706"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#706"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00706] For method error arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#711"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00711] For method error arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00716"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#716"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00716] For method error arguments Marker  marker|String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#721"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00721] For method info arguments String  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00726"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#726"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00726] For method info arguments String  message|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#731"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00731] For method info arguments String  message|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00736"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#736"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00736] For method info arguments String  message|Object  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00741"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#741"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00741] For method info arguments String  msg|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#746"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00746] For method info arguments Marker  marker|String  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00751"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#751"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00751] For method info arguments Marker  marker|String  format|Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00756"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#756"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00756] For method info arguments Marker  marker|String  format|Object  arg1|Object  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00761"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#761"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00761] For method info arguments Marker  marker|String  format|Object  ...arguments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00766"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.html#766"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00766] For method info arguments Marker  marker|String  msg|Throwable  t"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/LogContext.java.svg" }

};
console.log('leListeStr 99 main end');
