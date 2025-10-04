console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java 18 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "ConfigProvider"
 , "c2" : "org.apache.kafka.common.config.provider.DirectoryConfigProvider"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.config.provider.DirectoryConfigProvider" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#48"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#51"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#60"
 , "c1" : "ConfigData"
 , "c2" : "get(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#72"
 , "c1" : "ConfigData"
 , "c2" : "get(String;Set&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#78"
 , "c1" : "ConfigData"
 , "c2" : "get(String;Predicate&lt;Path&gt;)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#100"
 , "c1" : "String"
 , "c2" : "read(Path)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
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
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method get arguments String  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method get arguments String  path|Set&lt;String &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method get arguments String  path|Predicate&lt;Path &gt;  fileFilter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN170986 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN170986 the MagicNumber/String  'The path {} is not a directory' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN170986 the MagicNumber/String  'Could not list directory {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN170986 the MagicNumber/String  'Could not list directory ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method read arguments Path  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.read@POLYN172457 the MagicNumber/String  'Could not read file {} for property {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.read@POLYN172457 the MagicNumber/String  'Could not read file ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.read@POLYN172457 the MagicNumber/String  ' for property ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00048] Valued method configure is empty or contains only a return. Interface segregation for ConfigProvider"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00048] In the class DirectoryConfigProvider which implements the interface(s) ConfigProvider, the method configure is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedConfigProvider"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00051] Valued method close is empty or contains only a return. Interface segregation for ConfigProvider"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00051] In the class DirectoryConfigProvider which implements the interface(s) ConfigProvider, the method close is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedConfigProvider"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
