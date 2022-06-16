console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java 19 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
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
 , "c4" : "7"
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
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class DirectoryConfigProvider contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method get arguments String  path"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method get arguments String  path|Set&lt;String &gt;  keys"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method get arguments String  path|Predicate&lt;Path &gt;  fileFilter"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN171284 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN171284 the MagicNumber/String  'The path {} is not a directory' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN171284 the MagicNumber/String  'Could not list directory {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.get@POLYN171284 the MagicNumber/String  'Could not list directory ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method read arguments Path  path"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.read@POLYN172731 the MagicNumber/String  'Could not read file {} for property {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.read@POLYN172731 the MagicNumber/String  'Could not read file ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.config.provider.DirectoryConfigProvider.read@POLYN172731 the MagicNumber/String  ' for property ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00028] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00028] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00031] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/provider/DirectoryConfigProvider.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00031] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
